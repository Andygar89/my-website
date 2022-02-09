import {
  Connection,
  PublicKey,
  TransactionInstruction,
  Transaction,
  clusterApiUrl,
  Keypair,
  sendAndConfirmTransaction
} from '@solana/web3.js';

import {
  Token,
  TOKEN_PROGRAM_ID
} from '@solana/spl-token';

const sendNft = async (receiverAddress, mintAddress) => {
  const connection = new Connection(clusterApiUrl(process.env.NETWORK), 'confirmed');

  const wallet = Keypair.fromSecretKey(new Uint8Array(
    [180,199,19,61,46,241,9,1,167,55,140,21,84,171
    ,236,99,16,127,27,233,216,81,222,92,193,150,214,202
    ,229,191,85,151,68,130,230,75,23,200,183,147,12
    ,1,82,82,37,33,144,89,254,176,249,244,110,152,73
    ,242,220,152,100,124,179,241,192,90]
  )) // to be updated to .env . still having problem if using .env

  const mintPublicKey = new PublicKey(mintAddress);   
  const receiverPublicKey = new PublicKey(receiverAddress);

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

const getConnectionBlock = async (connection) => {
  let slot = await connection.getSlot();

  let block = await connection.getBlock(slot);

  return block;
}

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const mintAddress = req.body.mint_address
    const receiverAddress = req.body.receiver_address

    const { recentBlockhash, blockhash, signature } = await sendNft(receiverAddress, mintAddress)

    res.json([
      { recentBlockhash,
        blockhash,
        signature,
        sender_wallet: 'asdasd',
        receiver_wallet: receiverAddress,
        recent_blockhash: recentBlockhash,
        block: blockhash,
        confirmation_status: 'confirmed',
        mint_address: mintAddress,
      }
    ])
  }
}