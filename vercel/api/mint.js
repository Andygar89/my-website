import {
  Connection,
  PublicKey,
  TransactionInstruction,
  Transaction,
  clusterApiUrl,
  Keypair,
  sendAndConfirmTransaction,
  GetTokenAccountsByOwner
} from '@solana/web3.js';

import {
  Token,
  TOKEN_PROGRAM_ID
} from '@solana/spl-token';

import { mint } from './mintNft';

const getConnectionBlock = async (connection) => {
  let slot = await connection.getSlot();

  let block = await connection.getBlock(slot);

  return block;
}

const mintNft = async (receiverAddress) => {
  const connection = new Connection(clusterApiUrl(process.env.NETWORK), 'confirmed');

  const wallet = Keypair.fromSecretKey(new Uint8Array(
    [198,82,32,159,7,40,249,39,211,38,104,227,34,172,163,
    241,143,95,137,166,81,199,221,91,48,122,83,65,
    22,165,249,250,225,43,139,98,190,136,77,98,73,217,
    241,210,14,177,189,187,197,156,122,87,220,244,171,
    152,167,240,134,135,70,9,10,231]
  )) // to be updated to .env . still having problem if using .env

  const receiverPublicKey = new PublicKey(receiverAddress);

  let toTokenAccount = '';

  await mint(
    wallet,
    process.env.NETWORK,
    new PublicKey(process.env.CONFIG_ADDRESS),
    process.env.PROGRAM_UUID,
    process.env.RPC_URL
  )
   
  const { value: splAccounts } = await connection.getParsedTokenAccountsByOwner(wallet.publicKey, { programId: TOKEN_PROGRAM_ID })

  const nftAccounts = splAccounts.filter(({ account }) => {
    const amount = account?.data?.parsed?.info?.tokenAmount?.uiAmount;
    const decimals = account?.data?.parsed?.info?.tokenAmount?.decimals;

    return decimals === 0 && amount >= 1;
  });

  if (nftAccounts) {
    toTokenAccount = nftAccounts[0].account
  }

  const mintAddress = toTokenAccount?.data?.parsed?.info?.mint;
  const mintPublicKey = new PublicKey(mintAddress);

  const mintToken = new Token(
      connection,
      mintPublicKey,
      TOKEN_PROGRAM_ID,
      wallet
  );

  const fromTokenAccount = await mintToken.getOrCreateAssociatedAccountInfo(
      wallet.publicKey
  );

  const associatedDestinationTokenAddr = await Token.getAssociatedTokenAddress(
      mintToken.associatedProgramId,
      mintToken.programId,
      mintPublicKey,
      receiverPublicKey
  );

  const receiverAccount = await connection.getAccountInfo(associatedDestinationTokenAddr);

  const instructions = [];  

  if (receiverAccount === null) {
      instructions.push(
          Token.createAssociatedTokenAccountInstruction(
          mintToken.associatedProgramId,
          mintToken.programId,
          mintPublicKey,
          associatedDestinationTokenAddr,
          receiverPublicKey,
          wallet.publicKey
        )
      )
  }

  instructions.push(
    Token.createTransferInstruction(
      TOKEN_PROGRAM_ID,
      fromTokenAccount.address,
      associatedDestinationTokenAddr,
      wallet.publicKey,
      [],
      1
    )
  );

  const { blockhash } = await getConnectionBlock(connection)

  const transaction = new Transaction().add(...instructions);

  transaction.feePayer = wallet.publicKey;
  transaction.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;

  const signature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [wallet]
  );

  return { recentBlockhash: transaction.recentBlockhash, blockhash, signature }
}

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { recentBlockhash, blockhash, signature } = await mintNft(req.body.receiver_address)

    res.json([
        { recentBlockhash, blockhash, signature }
    ])
  }
}