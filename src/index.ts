import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  //static metshod
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  constructor(
    index: number,
    // hash는 모든 속성을 엄청 길고 수학적으로 이상한 하나의 문자열로 결합한 것
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "20202020202", "", "Hello", 123456);

let blockchain: [Block] = [genesisBlock];

// 현재 블록체인 구조를 가져온다.
const getBlockchain = (): Block[] => blockchain;

// 가장 최근에 추가된 블록체인을 가져온다.
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

// 현재 시간을 밀리초로 계산
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

// 블록체인 생성 (파라미터는 문자열 타입) Block을 리턴한다.
const createNewBlock = (data: string): Block => {
  // 이전 블록체인은 마지막 블록체인이다.
  const previousBlock: Block = getLatestBlock();
  // 새로운 인덱스는 이전 블록체인 index에 + 1 해준다.
  const newIndex: number = previousBlock.index + 1;
  // 새로운 시간을 생성한다.
  const newTimestamp: number = getNewTimeStamp();

  // 새로운 hash를 생성한다.
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimestamp,
    data
  );

  // 새로운 블록을 생선한다.
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimestamp
  );
  return newBlock;
};

console.log(createNewBlock("hello"), createNewBlock("bye bye"));

export {};
