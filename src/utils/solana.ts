import { PublicKey } from '@solana/web3.js';

class Solana {
  TOKEN_PROGRAM = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';

  async initializeTransaction() {
    const { Connection, clusterApiUrl, LAMPORTS_PER_SOL, Transaction, SystemProgram, PublicKey } = solanaWeb3;

    const wallet = window.solana;

    let connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    let receiver = new PublicKey('Bnxg7FmbkBJok7ufQgcLc697SnAJexneQwxa7ANhVhEk');

    let transaction = new Transaction();

    const { blockhash } = await this.getConnectionBlock(connection);

    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: receiver,
        lamports: LAMPORTS_PER_SOL,
      })
    );

    const { recentBlockhash } = await this.getRecentBlockHash(transaction, wallet, connection);

    return { transaction, wallet, connection, recentBlockhash, blockhash };
  }

  async sendTransaction(transaction: Object, provider: Object, connection: typeof Connection) {
    const { Connection } = solanaWeb3;

    if (transaction) {
      try {
        let signed = await provider.signTransaction(transaction);
        let signature = await connection.sendRawTransaction(signed.serialize());

        await connection.confirmTransaction(signature);

        return signature;
      } catch (err) {
        console.log('Error: ' + JSON.stringify(err));
      }
    }
  }

  async getConnectionBlock(connection: typeof Connection) {
    const { Connection } = solanaWeb3;

    let slot = await connection.getSlot();

    let block = await connection.getBlock(slot);

    return block;
  }

  async getRecentBlockHash(transaction: typeof Transaction, provider: Object, connection: typeof Connection) {
    const { Connection, Transaction } = solanaWeb3;

    transaction.feePayer = provider.publicKey;
    const anyTransaction = transaction;
    anyTransaction.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;

    return anyTransaction;
  }

  async buyNft(mintAddress, sellerAddress) {
    const { Connection, clusterApiUrl, LAMPORTS_PER_SOL, Transaction, SystemProgram, PublicKey } = solanaWeb3;

    const wallet = window.solana;

    let connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    let receiver = new PublicKey(sellerAddress);

    let transaction = new Transaction();

    const { blockhash } = await this.getConnectionBlock(connection);

    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: receiver,
        lamports: LAMPORTS_PER_SOL,
      })
    );

    const { recentBlockhash } = await this.getRecentBlockHash(transaction, wallet, connection);

    const signature = await this.sendTransaction(transaction, wallet, connection);

    return { transaction, wallet, connection, recentBlockhash, blockhash, signature };
  }

  async listNft(mintAddress) {
    const { Connection, PublicKey, TransactionInstruction, Transaction, clusterApiUrl } = solanaWeb3;
    const { Token, TOKEN_PROGRAM_ID } = splToken;

    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    const wallet = window.solana;

    const mintPublicKey = new PublicKey(mintAddress);
    const receiverPublicKey = new PublicKey(import.meta.env.VITE_APP_MARKETPLACE_PUBLIC_KEY);

    const mintToken = new Token(connection, mintPublicKey, TOKEN_PROGRAM_ID, wallet);

    const fromTokenAccount = await mintToken.getOrCreateAssociatedAccountInfo(wallet.publicKey);

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
      );
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

    const { blockhash } = await this.getConnectionBlock(connection);

    const transaction = new Transaction().add(...instructions);

    transaction.feePayer = wallet.publicKey;
    transaction.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;

    const signature = await this.sendTransaction(transaction, wallet, connection);

    return { recentBlockhash: transaction.recentBlockhash, blockhash, signature };
  }

  async getNfts(walletAddress: String) {
    const { Connection, Transaction, clusterApiUrl, PublicKey } = solanaWeb3;

    let connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    const provider = window.solana;

    const { value: splAccounts } = await connection.getParsedTokenAccountsByOwner(new PublicKey(walletAddress), {
      programId: new PublicKey(this.TOKEN_PROGRAM),
    });
  }

  async mintNft() {
    const { Connection, clusterApiUrl, LAMPORTS_PER_SOL, Transaction, SystemProgram, PublicKey } = solanaWeb3;

    const wallet = window.solana;

    let connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    let receiver = new PublicKey(import.meta.env.VITE_APP_MARKETPLACE_PUBLIC_KEY);

    let transaction = new Transaction();

    const { blockhash } = await this.getConnectionBlock(connection);

    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: receiver,
        lamports: LAMPORTS_PER_SOL,
      })
    );

    const { recentBlockhash } = await this.getRecentBlockHash(transaction, wallet, connection);

    const signature = await this.sendTransaction(transaction, wallet, connection);

    return { transaction, wallet, connection, recentBlockhash, blockhash, signature };
  }
}

export default new Solana();
