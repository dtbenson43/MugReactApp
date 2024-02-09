/* eslint-disable */
// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
};

export type AddChatMessageInput = {
  channel: Scalars['String']['input'];
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type AddChatMessagePayload = {
  __typename?: 'AddChatMessagePayload';
  addedMessage: ChatMessage;
};

export type AddUserSelectionInput = {
  choiceId: Scalars['String']['input'];
  gameId: Scalars['String']['input'];
};

export type AddUserSelectionPayload = {
  __typename?: 'AddUserSelectionPayload';
  updatedGame: ChooseGame;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER',
  Validation = 'VALIDATION'
}

export type Book = {
  __typename?: 'Book';
  name?: Maybe<Scalars['String']['output']>;
};

export type ChatMessage = {
  __typename?: 'ChatMessage';
  channel: Scalars['String']['output'];
  dateTime: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  name: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type ChatResponseInput = {
  prompt: Scalars['String']['input'];
};

export type ChatResponsePayload = {
  __typename?: 'ChatResponsePayload';
  getChatResponsePayload?: Maybe<GetChatResponsePayload>;
};

export type ChoiceOption = {
  __typename?: 'ChoiceOption';
  nextBranchId: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type ChooseGame = {
  __typename?: 'ChooseGame';
  branches: Array<ChooseGameBranch>;
  createdAt: Scalars['DateTime']['output'];
  currentBranch: ChooseGameBranch;
  id: Scalars['String']['output'];
  initialBranch: ChooseGameBranch;
  lastAccessed: Scalars['DateTime']['output'];
  previousBranch?: Maybe<ChooseGameBranch>;
  title: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type ChooseGameBranch = {
  __typename?: 'ChooseGameBranch';
  createdAt: Scalars['DateTime']['output'];
  firstOption: ChoiceOption;
  id: Scalars['String']['output'];
  secondOption: ChoiceOption;
  text: Scalars['String']['output'];
  userChoice?: Maybe<UserChoiceOption>;
};

export type ConversationMessage = {
  __typename?: 'ConversationMessage';
  conversationId: Scalars['String']['output'];
  from: Scalars['String']['output'];
  messageId: Scalars['String']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type CreateNewGameInput = {
  userId: Scalars['String']['input'];
};

export type CreateNewGamePayload = {
  __typename?: 'CreateNewGamePayload';
  newGame: ChooseGame;
};

export type GetChatResponsePayload = {
  __typename?: 'GetChatResponsePayload';
  chatResult?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addChatMessage: AddChatMessagePayload;
  addUserSelection: AddUserSelectionPayload;
  chatResponse: ChatResponsePayload;
  createNewGame: CreateNewGamePayload;
  updateZugBobRegistry: UpdateZugBobRegistryPayload;
};


export type MutationAddChatMessageArgs = {
  input: AddChatMessageInput;
};


export type MutationAddUserSelectionArgs = {
  input: AddUserSelectionInput;
};


export type MutationChatResponseArgs = {
  input: ChatResponseInput;
};


export type MutationCreateNewGameArgs = {
  input: CreateNewGameInput;
};


export type MutationUpdateZugBobRegistryArgs = {
  input: UpdateZugBobRegistryInput;
};

export type Query = {
  __typename?: 'Query';
  chat: Array<ChatMessage>;
  chooseGames: Array<ChooseGame>;
  conversations: Array<ConversationMessage>;
  me: Scalars['String']['output'];
  simpleTest: Scalars['String']['output'];
  test: Scalars['String']['output'];
  testDocument?: Maybe<TestDocument>;
  userId?: Maybe<Scalars['String']['output']>;
  weatherForecast: Array<WeatherForecast>;
};


export type QueryChatArgs = {
  order?: InputMaybe<Array<Cosmos_ChatMessageSortInput>>;
  where?: InputMaybe<Cosmos_ChatMessageFilterInput>;
};


export type QueryChooseGamesArgs = {
  order?: InputMaybe<Array<Cosmos_ChooseGameSortInput>>;
  where?: InputMaybe<Cosmos_ChooseGameFilterInput>;
};


export type QueryConversationsArgs = {
  order?: InputMaybe<Array<Cosmos_ConversationMessageSortInput>>;
  where?: InputMaybe<Cosmos_ConversationMessageFilterInput>;
};

export type Subscription = {
  __typename?: 'Subscription';
  bookAdded: Book;
  chatMessageAdded: ChatMessage;
};


export type SubscriptionChatMessageAddedArgs = {
  channel: Scalars['String']['input'];
};

export type TestDocument = {
  __typename?: 'TestDocument';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  type: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

export type UpdateZigBobRegistryPayload = {
  __typename?: 'UpdateZigBobRegistryPayload';
  status: Scalars['String']['output'];
};

export type UpdateZugBobRegistryInput = {
  zigBob: ZigBobInput;
};

export type UpdateZugBobRegistryPayload = {
  __typename?: 'UpdateZugBobRegistryPayload';
  updateZigBobRegistryPayload?: Maybe<UpdateZigBobRegistryPayload>;
};

export enum UserChoiceOption {
  FirstOption = 'FIRST_OPTION',
  SecondOption = 'SECOND_OPTION'
}

export type WeatherForecast = {
  __typename?: 'WeatherForecast';
  date: Scalars['Date']['output'];
  summary: Scalars['String']['output'];
  temperatureC: Scalars['Int']['output'];
  temperatureF: Scalars['Int']['output'];
};

export type ZigBobInput = {
  blomf?: InputMaybe<Scalars['String']['input']>;
};

export type Cosmos_ChatMessageFilterInput = {
  and?: InputMaybe<Array<Cosmos_ChatMessageFilterInput>>;
  channel?: InputMaybe<Cosmos_StringOperationFilterInput>;
  dateTime?: InputMaybe<Cosmos_DateTimeOperationFilterInput>;
  id?: InputMaybe<Cosmos_StringOperationFilterInput>;
  message?: InputMaybe<Cosmos_StringOperationFilterInput>;
  name?: InputMaybe<Cosmos_StringOperationFilterInput>;
  or?: InputMaybe<Array<Cosmos_ChatMessageFilterInput>>;
  userId?: InputMaybe<Cosmos_StringOperationFilterInput>;
};

export type Cosmos_ChatMessageSortInput = {
  channel?: InputMaybe<Cosmos_SortEnumType>;
  dateTime?: InputMaybe<Cosmos_SortEnumType>;
  id?: InputMaybe<Cosmos_SortEnumType>;
  message?: InputMaybe<Cosmos_SortEnumType>;
  name?: InputMaybe<Cosmos_SortEnumType>;
  userId?: InputMaybe<Cosmos_SortEnumType>;
};

export type Cosmos_ChoiceOptionFilterInput = {
  and?: InputMaybe<Array<Cosmos_ChoiceOptionFilterInput>>;
  nextBranchId?: InputMaybe<Cosmos_StringOperationFilterInput>;
  or?: InputMaybe<Array<Cosmos_ChoiceOptionFilterInput>>;
  text?: InputMaybe<Cosmos_StringOperationFilterInput>;
};

export type Cosmos_ChoiceOptionSortInput = {
  nextBranchId?: InputMaybe<Cosmos_SortEnumType>;
  text?: InputMaybe<Cosmos_SortEnumType>;
};

export type Cosmos_ChooseGameBranchFilterInput = {
  and?: InputMaybe<Array<Cosmos_ChooseGameBranchFilterInput>>;
  createdAt?: InputMaybe<Cosmos_DateTimeOperationFilterInput>;
  firstOption?: InputMaybe<Cosmos_ChoiceOptionFilterInput>;
  id?: InputMaybe<Cosmos_StringOperationFilterInput>;
  or?: InputMaybe<Array<Cosmos_ChooseGameBranchFilterInput>>;
  secondOption?: InputMaybe<Cosmos_ChoiceOptionFilterInput>;
  text?: InputMaybe<Cosmos_StringOperationFilterInput>;
  userChoice?: InputMaybe<Cosmos_NullableOfUserChoiceOptionOperationFilterInput>;
};

export type Cosmos_ChooseGameBranchSortInput = {
  createdAt?: InputMaybe<Cosmos_SortEnumType>;
  firstOption?: InputMaybe<Cosmos_ChoiceOptionSortInput>;
  id?: InputMaybe<Cosmos_SortEnumType>;
  secondOption?: InputMaybe<Cosmos_ChoiceOptionSortInput>;
  text?: InputMaybe<Cosmos_SortEnumType>;
  userChoice?: InputMaybe<Cosmos_SortEnumType>;
};

export type Cosmos_ChooseGameFilterInput = {
  and?: InputMaybe<Array<Cosmos_ChooseGameFilterInput>>;
  branches?: InputMaybe<Cosmos_ListFilterInputTypeOfChooseGameBranchFilterInput>;
  createdAt?: InputMaybe<Cosmos_DateTimeOperationFilterInput>;
  currentBranch?: InputMaybe<Cosmos_ChooseGameBranchFilterInput>;
  id?: InputMaybe<Cosmos_StringOperationFilterInput>;
  initialBranch?: InputMaybe<Cosmos_ChooseGameBranchFilterInput>;
  lastAccessed?: InputMaybe<Cosmos_DateTimeOperationFilterInput>;
  or?: InputMaybe<Array<Cosmos_ChooseGameFilterInput>>;
  previousBranch?: InputMaybe<Cosmos_ChooseGameBranchFilterInput>;
  title?: InputMaybe<Cosmos_StringOperationFilterInput>;
  userId?: InputMaybe<Cosmos_StringOperationFilterInput>;
};

export type Cosmos_ChooseGameSortInput = {
  createdAt?: InputMaybe<Cosmos_SortEnumType>;
  currentBranch?: InputMaybe<Cosmos_ChooseGameBranchSortInput>;
  id?: InputMaybe<Cosmos_SortEnumType>;
  initialBranch?: InputMaybe<Cosmos_ChooseGameBranchSortInput>;
  lastAccessed?: InputMaybe<Cosmos_SortEnumType>;
  previousBranch?: InputMaybe<Cosmos_ChooseGameBranchSortInput>;
  title?: InputMaybe<Cosmos_SortEnumType>;
  userId?: InputMaybe<Cosmos_SortEnumType>;
};

export type Cosmos_ConversationMessageFilterInput = {
  and?: InputMaybe<Array<Cosmos_ConversationMessageFilterInput>>;
  conversationId?: InputMaybe<Cosmos_StringOperationFilterInput>;
  from?: InputMaybe<Cosmos_StringOperationFilterInput>;
  messageId?: InputMaybe<Cosmos_StringOperationFilterInput>;
  or?: InputMaybe<Array<Cosmos_ConversationMessageFilterInput>>;
  parentId?: InputMaybe<Cosmos_StringOperationFilterInput>;
  text?: InputMaybe<Cosmos_StringOperationFilterInput>;
  timestamp?: InputMaybe<Cosmos_DateTimeOperationFilterInput>;
  userId?: InputMaybe<Cosmos_StringOperationFilterInput>;
};

export type Cosmos_ConversationMessageSortInput = {
  conversationId?: InputMaybe<Cosmos_SortEnumType>;
  from?: InputMaybe<Cosmos_SortEnumType>;
  messageId?: InputMaybe<Cosmos_SortEnumType>;
  parentId?: InputMaybe<Cosmos_SortEnumType>;
  text?: InputMaybe<Cosmos_SortEnumType>;
  timestamp?: InputMaybe<Cosmos_SortEnumType>;
  userId?: InputMaybe<Cosmos_SortEnumType>;
};

export type Cosmos_DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Cosmos_ListFilterInputTypeOfChooseGameBranchFilterInput = {
  all?: InputMaybe<Cosmos_ChooseGameBranchFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<Cosmos_ChooseGameBranchFilterInput>;
  some?: InputMaybe<Cosmos_ChooseGameBranchFilterInput>;
};

export type Cosmos_NullableOfUserChoiceOptionOperationFilterInput = {
  eq?: InputMaybe<UserChoiceOption>;
  in?: InputMaybe<Array<InputMaybe<UserChoiceOption>>>;
  neq?: InputMaybe<UserChoiceOption>;
  nin?: InputMaybe<Array<InputMaybe<UserChoiceOption>>>;
};

export enum Cosmos_SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Cosmos_StringOperationFilterInput = {
  and?: InputMaybe<Array<Cosmos_StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<Cosmos_StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type SubscribeToChannelSubscriptionVariables = Exact<{
  channel: Scalars['String']['input'];
}>;


export type SubscribeToChannelSubscription = { __typename?: 'Subscription', chatMessageAdded: { __typename?: 'ChatMessage', id: string, name: string, message: string, channel: string, dateTime: any } };

export type AddChatMessageMutationVariables = Exact<{
  channel: Scalars['String']['input'];
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type AddChatMessageMutation = { __typename?: 'Mutation', addChatMessage: { __typename?: 'AddChatMessagePayload', addedMessage: { __typename?: 'ChatMessage', id: string, name: string, message: string, channel: string, dateTime: any } } };

export type GetMessagesByChannelQueryVariables = Exact<{
  channel: Scalars['String']['input'];
}>;


export type GetMessagesByChannelQuery = { __typename?: 'Query', chat: Array<{ __typename?: 'ChatMessage', id: string, name: string, message: string, channel: string, dateTime: any }> };

export type GetChooseGamesByUserIdQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetChooseGamesByUserIdQuery = { __typename?: 'Query', chooseGames: Array<{ __typename?: 'ChooseGame', id: string, userId: string, title: string, createdAt: any, lastAccessed: any, currentBranch: { __typename?: 'ChooseGameBranch', id: string, text: string, createdAt: any, userChoice?: UserChoiceOption | null, firstOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string }, secondOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string } }, previousBranch?: { __typename?: 'ChooseGameBranch', id: string, text: string, createdAt: any, userChoice?: UserChoiceOption | null, firstOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string }, secondOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string } } | null, initialBranch: { __typename?: 'ChooseGameBranch', id: string, text: string, createdAt: any, userChoice?: UserChoiceOption | null, firstOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string }, secondOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string } }, branches: Array<{ __typename?: 'ChooseGameBranch', id: string, text: string, createdAt: any, userChoice?: UserChoiceOption | null, firstOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string }, secondOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string } }> }> };

export type CreateNewGameMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type CreateNewGameMutation = { __typename?: 'Mutation', createNewGame: { __typename?: 'CreateNewGamePayload', newGame: { __typename?: 'ChooseGame', id: string, userId: string, title: string, createdAt: any, lastAccessed: any, currentBranch: { __typename?: 'ChooseGameBranch', id: string, text: string, createdAt: any, userChoice?: UserChoiceOption | null, firstOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string }, secondOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string } }, previousBranch?: { __typename?: 'ChooseGameBranch', id: string, text: string, createdAt: any, userChoice?: UserChoiceOption | null, firstOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string }, secondOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string } } | null, initialBranch: { __typename?: 'ChooseGameBranch', id: string, text: string, createdAt: any, userChoice?: UserChoiceOption | null, firstOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string }, secondOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string } }, branches: Array<{ __typename?: 'ChooseGameBranch', id: string, text: string, createdAt: any, userChoice?: UserChoiceOption | null, firstOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string }, secondOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string } }> } } };

export type AddUserSelectionMutationVariables = Exact<{
  gameId: Scalars['String']['input'];
  choiceId: Scalars['String']['input'];
}>;


export type AddUserSelectionMutation = { __typename?: 'Mutation', addUserSelection: { __typename?: 'AddUserSelectionPayload', updatedGame: { __typename?: 'ChooseGame', id: string, userId: string, title: string, createdAt: any, lastAccessed: any, currentBranch: { __typename?: 'ChooseGameBranch', id: string, text: string, createdAt: any, userChoice?: UserChoiceOption | null, firstOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string }, secondOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string } }, previousBranch?: { __typename?: 'ChooseGameBranch', id: string, text: string, createdAt: any, userChoice?: UserChoiceOption | null, firstOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string }, secondOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string } } | null, initialBranch: { __typename?: 'ChooseGameBranch', id: string, text: string, createdAt: any, userChoice?: UserChoiceOption | null, firstOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string }, secondOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string } }, branches: Array<{ __typename?: 'ChooseGameBranch', id: string, text: string, createdAt: any, userChoice?: UserChoiceOption | null, firstOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string }, secondOption: { __typename?: 'ChoiceOption', text: string, nextBranchId: string } }> } } };

export type GetConversationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetConversationsQuery = { __typename?: 'Query', conversations: Array<{ __typename?: 'ConversationMessage', conversationId: string, messageId: string, parentId?: string | null, userId: string, text: string, from: string, timestamp: any }> };

export type GetSimpleTestQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSimpleTestQuery = { __typename?: 'Query', simpleTest: string };

export type GetUserIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserIdQuery = { __typename?: 'Query', userId?: string | null };


export const SubscribeToChannelDocument = gql`
    subscription SubscribeToChannel($channel: String!) {
  chatMessageAdded(channel: $channel) {
    id
    name
    message
    channel
    dateTime
  }
}
    `;

/**
 * __useSubscribeToChannelSubscription__
 *
 * To run a query within a React component, call `useSubscribeToChannelSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToChannelSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribeToChannelSubscription({
 *   variables: {
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useSubscribeToChannelSubscription(baseOptions: Apollo.SubscriptionHookOptions<SubscribeToChannelSubscription, SubscribeToChannelSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubscribeToChannelSubscription, SubscribeToChannelSubscriptionVariables>(SubscribeToChannelDocument, options);
      }
export type SubscribeToChannelSubscriptionHookResult = ReturnType<typeof useSubscribeToChannelSubscription>;
export type SubscribeToChannelSubscriptionResult = Apollo.SubscriptionResult<SubscribeToChannelSubscription>;
export const AddChatMessageDocument = gql`
    mutation AddChatMessage($channel: String!, $message: String!, $name: String!) {
  addChatMessage(input: {channel: $channel, message: $message, name: $name}) {
    addedMessage {
      id
      name
      message
      channel
      dateTime
    }
  }
}
    `;
export type AddChatMessageMutationFn = Apollo.MutationFunction<AddChatMessageMutation, AddChatMessageMutationVariables>;

/**
 * __useAddChatMessageMutation__
 *
 * To run a mutation, you first call `useAddChatMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddChatMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addChatMessageMutation, { data, loading, error }] = useAddChatMessageMutation({
 *   variables: {
 *      channel: // value for 'channel'
 *      message: // value for 'message'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAddChatMessageMutation(baseOptions?: Apollo.MutationHookOptions<AddChatMessageMutation, AddChatMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddChatMessageMutation, AddChatMessageMutationVariables>(AddChatMessageDocument, options);
      }
export type AddChatMessageMutationHookResult = ReturnType<typeof useAddChatMessageMutation>;
export type AddChatMessageMutationResult = Apollo.MutationResult<AddChatMessageMutation>;
export type AddChatMessageMutationOptions = Apollo.BaseMutationOptions<AddChatMessageMutation, AddChatMessageMutationVariables>;
export const GetMessagesByChannelDocument = gql`
    query GetMessagesByChannel($channel: String!) {
  chat(where: {channel: {eq: $channel}}) {
    id
    name
    message
    channel
    dateTime
  }
}
    `;

/**
 * __useGetMessagesByChannelQuery__
 *
 * To run a query within a React component, call `useGetMessagesByChannelQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesByChannelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesByChannelQuery({
 *   variables: {
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useGetMessagesByChannelQuery(baseOptions: Apollo.QueryHookOptions<GetMessagesByChannelQuery, GetMessagesByChannelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessagesByChannelQuery, GetMessagesByChannelQueryVariables>(GetMessagesByChannelDocument, options);
      }
export function useGetMessagesByChannelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesByChannelQuery, GetMessagesByChannelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessagesByChannelQuery, GetMessagesByChannelQueryVariables>(GetMessagesByChannelDocument, options);
        }
export function useGetMessagesByChannelSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMessagesByChannelQuery, GetMessagesByChannelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMessagesByChannelQuery, GetMessagesByChannelQueryVariables>(GetMessagesByChannelDocument, options);
        }
export type GetMessagesByChannelQueryHookResult = ReturnType<typeof useGetMessagesByChannelQuery>;
export type GetMessagesByChannelLazyQueryHookResult = ReturnType<typeof useGetMessagesByChannelLazyQuery>;
export type GetMessagesByChannelSuspenseQueryHookResult = ReturnType<typeof useGetMessagesByChannelSuspenseQuery>;
export type GetMessagesByChannelQueryResult = Apollo.QueryResult<GetMessagesByChannelQuery, GetMessagesByChannelQueryVariables>;
export const GetChooseGamesByUserIdDocument = gql`
    query GetChooseGamesByUserId($userId: String) {
  chooseGames(where: {userId: {eq: $userId}}) {
    id
    userId
    title
    createdAt
    lastAccessed
    currentBranch {
      id
      text
      createdAt
      firstOption {
        text
        nextBranchId
      }
      secondOption {
        text
        nextBranchId
      }
      userChoice
    }
    previousBranch {
      id
      text
      createdAt
      firstOption {
        text
        nextBranchId
      }
      secondOption {
        text
        nextBranchId
      }
      userChoice
    }
    initialBranch {
      id
      text
      createdAt
      firstOption {
        text
        nextBranchId
      }
      secondOption {
        text
        nextBranchId
      }
      userChoice
    }
    branches {
      id
      text
      createdAt
      firstOption {
        text
        nextBranchId
      }
      secondOption {
        text
        nextBranchId
      }
      userChoice
    }
  }
}
    `;

/**
 * __useGetChooseGamesByUserIdQuery__
 *
 * To run a query within a React component, call `useGetChooseGamesByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChooseGamesByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChooseGamesByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetChooseGamesByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<GetChooseGamesByUserIdQuery, GetChooseGamesByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChooseGamesByUserIdQuery, GetChooseGamesByUserIdQueryVariables>(GetChooseGamesByUserIdDocument, options);
      }
export function useGetChooseGamesByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChooseGamesByUserIdQuery, GetChooseGamesByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChooseGamesByUserIdQuery, GetChooseGamesByUserIdQueryVariables>(GetChooseGamesByUserIdDocument, options);
        }
export function useGetChooseGamesByUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetChooseGamesByUserIdQuery, GetChooseGamesByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetChooseGamesByUserIdQuery, GetChooseGamesByUserIdQueryVariables>(GetChooseGamesByUserIdDocument, options);
        }
export type GetChooseGamesByUserIdQueryHookResult = ReturnType<typeof useGetChooseGamesByUserIdQuery>;
export type GetChooseGamesByUserIdLazyQueryHookResult = ReturnType<typeof useGetChooseGamesByUserIdLazyQuery>;
export type GetChooseGamesByUserIdSuspenseQueryHookResult = ReturnType<typeof useGetChooseGamesByUserIdSuspenseQuery>;
export type GetChooseGamesByUserIdQueryResult = Apollo.QueryResult<GetChooseGamesByUserIdQuery, GetChooseGamesByUserIdQueryVariables>;
export const CreateNewGameDocument = gql`
    mutation CreateNewGame($userId: String!) {
  createNewGame(input: {userId: $userId}) {
    newGame {
      id
      userId
      title
      createdAt
      lastAccessed
      currentBranch {
        id
        text
        createdAt
        firstOption {
          text
          nextBranchId
        }
        secondOption {
          text
          nextBranchId
        }
        userChoice
      }
      previousBranch {
        id
        text
        createdAt
        firstOption {
          text
          nextBranchId
        }
        secondOption {
          text
          nextBranchId
        }
        userChoice
      }
      initialBranch {
        id
        text
        createdAt
        firstOption {
          text
          nextBranchId
        }
        secondOption {
          text
          nextBranchId
        }
        userChoice
      }
      branches {
        id
        text
        createdAt
        firstOption {
          text
          nextBranchId
        }
        secondOption {
          text
          nextBranchId
        }
        userChoice
      }
    }
  }
}
    `;
export type CreateNewGameMutationFn = Apollo.MutationFunction<CreateNewGameMutation, CreateNewGameMutationVariables>;

/**
 * __useCreateNewGameMutation__
 *
 * To run a mutation, you first call `useCreateNewGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewGameMutation, { data, loading, error }] = useCreateNewGameMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreateNewGameMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewGameMutation, CreateNewGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewGameMutation, CreateNewGameMutationVariables>(CreateNewGameDocument, options);
      }
export type CreateNewGameMutationHookResult = ReturnType<typeof useCreateNewGameMutation>;
export type CreateNewGameMutationResult = Apollo.MutationResult<CreateNewGameMutation>;
export type CreateNewGameMutationOptions = Apollo.BaseMutationOptions<CreateNewGameMutation, CreateNewGameMutationVariables>;
export const AddUserSelectionDocument = gql`
    mutation AddUserSelection($gameId: String!, $choiceId: String!) {
  addUserSelection(input: {gameId: $gameId, choiceId: $choiceId}) {
    updatedGame {
      id
      userId
      title
      createdAt
      lastAccessed
      currentBranch {
        id
        text
        createdAt
        firstOption {
          text
          nextBranchId
        }
        secondOption {
          text
          nextBranchId
        }
        userChoice
      }
      previousBranch {
        id
        text
        createdAt
        firstOption {
          text
          nextBranchId
        }
        secondOption {
          text
          nextBranchId
        }
        userChoice
      }
      initialBranch {
        id
        text
        createdAt
        firstOption {
          text
          nextBranchId
        }
        secondOption {
          text
          nextBranchId
        }
        userChoice
      }
      branches {
        id
        text
        createdAt
        firstOption {
          text
          nextBranchId
        }
        secondOption {
          text
          nextBranchId
        }
        userChoice
      }
    }
  }
}
    `;
export type AddUserSelectionMutationFn = Apollo.MutationFunction<AddUserSelectionMutation, AddUserSelectionMutationVariables>;

/**
 * __useAddUserSelectionMutation__
 *
 * To run a mutation, you first call `useAddUserSelectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserSelectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserSelectionMutation, { data, loading, error }] = useAddUserSelectionMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      choiceId: // value for 'choiceId'
 *   },
 * });
 */
export function useAddUserSelectionMutation(baseOptions?: Apollo.MutationHookOptions<AddUserSelectionMutation, AddUserSelectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserSelectionMutation, AddUserSelectionMutationVariables>(AddUserSelectionDocument, options);
      }
export type AddUserSelectionMutationHookResult = ReturnType<typeof useAddUserSelectionMutation>;
export type AddUserSelectionMutationResult = Apollo.MutationResult<AddUserSelectionMutation>;
export type AddUserSelectionMutationOptions = Apollo.BaseMutationOptions<AddUserSelectionMutation, AddUserSelectionMutationVariables>;
export const GetConversationsDocument = gql`
    query GetConversations {
  conversations {
    conversationId
    messageId
    parentId
    userId
    text
    from
    timestamp
  }
}
    `;

/**
 * __useGetConversationsQuery__
 *
 * To run a query within a React component, call `useGetConversationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConversationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConversationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetConversationsQuery(baseOptions?: Apollo.QueryHookOptions<GetConversationsQuery, GetConversationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetConversationsQuery, GetConversationsQueryVariables>(GetConversationsDocument, options);
      }
export function useGetConversationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetConversationsQuery, GetConversationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetConversationsQuery, GetConversationsQueryVariables>(GetConversationsDocument, options);
        }
export function useGetConversationsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetConversationsQuery, GetConversationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetConversationsQuery, GetConversationsQueryVariables>(GetConversationsDocument, options);
        }
export type GetConversationsQueryHookResult = ReturnType<typeof useGetConversationsQuery>;
export type GetConversationsLazyQueryHookResult = ReturnType<typeof useGetConversationsLazyQuery>;
export type GetConversationsSuspenseQueryHookResult = ReturnType<typeof useGetConversationsSuspenseQuery>;
export type GetConversationsQueryResult = Apollo.QueryResult<GetConversationsQuery, GetConversationsQueryVariables>;
export const GetSimpleTestDocument = gql`
    query GetSimpleTest {
  simpleTest
}
    `;

/**
 * __useGetSimpleTestQuery__
 *
 * To run a query within a React component, call `useGetSimpleTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSimpleTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSimpleTestQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSimpleTestQuery(baseOptions?: Apollo.QueryHookOptions<GetSimpleTestQuery, GetSimpleTestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSimpleTestQuery, GetSimpleTestQueryVariables>(GetSimpleTestDocument, options);
      }
export function useGetSimpleTestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSimpleTestQuery, GetSimpleTestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSimpleTestQuery, GetSimpleTestQueryVariables>(GetSimpleTestDocument, options);
        }
export function useGetSimpleTestSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSimpleTestQuery, GetSimpleTestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSimpleTestQuery, GetSimpleTestQueryVariables>(GetSimpleTestDocument, options);
        }
export type GetSimpleTestQueryHookResult = ReturnType<typeof useGetSimpleTestQuery>;
export type GetSimpleTestLazyQueryHookResult = ReturnType<typeof useGetSimpleTestLazyQuery>;
export type GetSimpleTestSuspenseQueryHookResult = ReturnType<typeof useGetSimpleTestSuspenseQuery>;
export type GetSimpleTestQueryResult = Apollo.QueryResult<GetSimpleTestQuery, GetSimpleTestQueryVariables>;
export const GetUserIdDocument = gql`
    query GetUserId {
  userId
}
    `;

/**
 * __useGetUserIdQuery__
 *
 * To run a query within a React component, call `useGetUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserIdQuery(baseOptions?: Apollo.QueryHookOptions<GetUserIdQuery, GetUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserIdQuery, GetUserIdQueryVariables>(GetUserIdDocument, options);
      }
export function useGetUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserIdQuery, GetUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserIdQuery, GetUserIdQueryVariables>(GetUserIdDocument, options);
        }
export function useGetUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserIdQuery, GetUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserIdQuery, GetUserIdQueryVariables>(GetUserIdDocument, options);
        }
export type GetUserIdQueryHookResult = ReturnType<typeof useGetUserIdQuery>;
export type GetUserIdLazyQueryHookResult = ReturnType<typeof useGetUserIdLazyQuery>;
export type GetUserIdSuspenseQueryHookResult = ReturnType<typeof useGetUserIdSuspenseQuery>;
export type GetUserIdQueryResult = Apollo.QueryResult<GetUserIdQuery, GetUserIdQueryVariables>;