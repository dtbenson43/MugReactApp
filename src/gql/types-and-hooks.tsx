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

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER',
  Validation = 'VALIDATION'
}

export type Book = {
  __typename?: 'Book';
  name?: Maybe<Scalars['String']['output']>;
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

export type Mutation = {
  __typename?: 'Mutation';
  updateZugBobRegistry: UpdateZugBobRegistryPayload;
};


export type MutationUpdateZugBobRegistryArgs = {
  input: UpdateZugBobRegistryInput;
};

export type Query = {
  __typename?: 'Query';
  conversations: Array<ConversationMessage>;
  me: Scalars['String']['output'];
  simpleTest: Scalars['String']['output'];
  test: Scalars['String']['output'];
  testDocument?: Maybe<TestDocument>;
  weatherForecast: Array<WeatherForecast>;
};


export type QueryConversationsArgs = {
  order?: InputMaybe<Array<Cosmos_ConversationMessageSortInput>>;
  where?: InputMaybe<Cosmos_ConversationMessageFilterInput>;
};

export type Subscription = {
  __typename?: 'Subscription';
  bookAdded: Book;
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

export type GetConversationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetConversationsQuery = { __typename?: 'Query', conversations: Array<{ __typename?: 'ConversationMessage', conversationId: string, messageId: string, parentId?: string | null, userId: string, text: string, from: string, timestamp: any }> };

export type GetSimpleTestQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSimpleTestQuery = { __typename?: 'Query', simpleTest: string };


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