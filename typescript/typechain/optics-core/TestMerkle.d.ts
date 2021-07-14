/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TestMerkleInterface extends ethers.utils.Interface {
  functions: {
    "branchRoot(bytes32,bytes32[32],uint256)": FunctionFragment;
    "count()": FunctionFragment;
    "insert(bytes32)": FunctionFragment;
    "root()": FunctionFragment;
    "tree()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "branchRoot",
    values: [
      BytesLike,
      [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "count", values?: undefined): string;
  encodeFunctionData(functionFragment: "insert", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "root", values?: undefined): string;
  encodeFunctionData(functionFragment: "tree", values?: undefined): string;

  decodeFunctionResult(functionFragment: "branchRoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "count", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "insert", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "root", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tree", data: BytesLike): Result;

  events: {};
}

export class TestMerkle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TestMerkleInterface;

  functions: {
    branchRoot(
      _leaf: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { _node: string }>;

    count(overrides?: CallOverrides): Promise<[BigNumber]>;

    insert(
      _node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    root(overrides?: CallOverrides): Promise<[string]>;

    tree(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;
  };

  branchRoot(
    _leaf: BytesLike,
    _proof: [
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike
    ],
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  count(overrides?: CallOverrides): Promise<BigNumber>;

  insert(
    _node: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  root(overrides?: CallOverrides): Promise<string>;

  tree(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    branchRoot(
      _leaf: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    count(overrides?: CallOverrides): Promise<BigNumber>;

    insert(_node: BytesLike, overrides?: CallOverrides): Promise<void>;

    root(overrides?: CallOverrides): Promise<string>;

    tree(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    branchRoot(
      _leaf: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    count(overrides?: CallOverrides): Promise<BigNumber>;

    insert(
      _node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    root(overrides?: CallOverrides): Promise<BigNumber>;

    tree(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    branchRoot(
      _leaf: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    count(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    insert(
      _node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    root(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tree(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}