/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddedByStatus = {
  __typename?: 'AddedByStatus';
  beaten: Scalars['Int']['output'];
  dropped: Scalars['Int']['output'];
  owned: Scalars['Int']['output'];
  playing: Scalars['Int']['output'];
  toplay: Scalars['Int']['output'];
  yet: Scalars['Int']['output'];
};

export type Clip = {
  __typename?: 'Clip';
  clip: Scalars['String']['output'];
  clips: ClipUrls;
  preview: Scalars['String']['output'];
  video: Scalars['String']['output'];
};

export type ClipUrls = {
  __typename?: 'ClipUrls';
  full: Scalars['String']['output'];
  size320: Scalars['String']['output'];
  size640: Scalars['String']['output'];
};

export type EsrbRating = {
  __typename?: 'EsrbRating';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type Game = {
  __typename?: 'Game';
  added: Scalars['Int']['output'];
  added_by_status: AddedByStatus;
  background_image: Scalars['String']['output'];
  clip?: Maybe<Clip>;
  esrb_rating?: Maybe<EsrbRating>;
  genres: Array<Genre>;
  id: Scalars['Int']['output'];
  metacritic?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  parent_platforms: Array<ParentPlatform>;
  platforms: Array<PlatformRelease>;
  playtime: Scalars['Int']['output'];
  rating: Scalars['Float']['output'];
  rating_top: Scalars['Float']['output'];
  ratings: Array<Rating>;
  ratings_count: Scalars['Int']['output'];
  released: Scalars['String']['output'];
  reviews_text_count: Scalars['Int']['output'];
  short_screenshots: Array<Screenshot>;
  slug: Scalars['String']['output'];
  stores: Array<StoreLink>;
  suggestions_count: Scalars['Int']['output'];
  tags: Array<Tag>;
  tba: Scalars['Boolean']['output'];
  updated: Scalars['String']['output'];
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSchedule: Schedule;
  login?: Maybe<Scalars['String']['output']>;
  registerUser: User;
};


export type MutationCreateScheduleArgs = {
  input: CreateScheduleInput;
};


export type MutationLoginArgs = {
  id: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterUserArgs = {
  input: UserRegisterInput;
};

export type ParentPlatform = {
  __typename?: 'ParentPlatform';
  platform: Platform;
};

export type Platform = {
  __typename?: 'Platform';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type PlatformRelease = {
  __typename?: 'PlatformRelease';
  platform: Platform;
  released_at: Scalars['String']['output'];
  requirements?: Maybe<Requirements>;
};

export type Query = {
  __typename?: 'Query';
  getGameById?: Maybe<Game>;
  getGames?: Maybe<Array<Maybe<Game>>>;
  getScheduleById?: Maybe<Schedule>;
  getUser?: Maybe<User>;
  getUsersBySchedule?: Maybe<User>;
};


export type QueryGetGameByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetGamesArgs = {
  query: Scalars['String']['input'];
};


export type QueryGetScheduleByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUsersByScheduleArgs = {
  id: Scalars['ID']['input'];
};

export type Rating = {
  __typename?: 'Rating';
  count: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  percent: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};

export type Requirements = {
  __typename?: 'Requirements';
  minimum: Scalars['String']['output'];
  recommended: Scalars['String']['output'];
};

export type Schedule = {
  __typename?: 'Schedule';
  creatorUserId: Scalars['String']['output'];
  date: Scalars['String']['output'];
  duration: Scalars['String']['output'];
  gameId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  users: Array<Scalars['String']['output']>;
};

export type Screenshot = {
  __typename?: 'Screenshot';
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
};

export type Store = {
  __typename?: 'Store';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type StoreLink = {
  __typename?: 'StoreLink';
  id: Scalars['Int']['output'];
  store: Store;
  url_en: Scalars['String']['output'];
  url_ru?: Maybe<Scalars['String']['output']>;
};

export type Tag = {
  __typename?: 'Tag';
  games_count: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image_background: Scalars['String']['output'];
  language: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  friends: Array<Maybe<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type UserRegisterInput = {
  name: Scalars['String']['input'];
};

export type CreateScheduleInput = {
  creatorUserId: Scalars['String']['input'];
  date: Scalars['String']['input'];
  duration?: InputMaybe<Scalars['String']['input']>;
  gameId: Scalars['String']['input'];
  users: Array<Scalars['String']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddedByStatus: ResolverTypeWrapper<AddedByStatus>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Clip: ResolverTypeWrapper<Clip>;
  ClipUrls: ResolverTypeWrapper<ClipUrls>;
  EsrbRating: ResolverTypeWrapper<EsrbRating>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Game: ResolverTypeWrapper<Game>;
  Genre: ResolverTypeWrapper<Genre>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  ParentPlatform: ResolverTypeWrapper<ParentPlatform>;
  Platform: ResolverTypeWrapper<Platform>;
  PlatformRelease: ResolverTypeWrapper<PlatformRelease>;
  Query: ResolverTypeWrapper<{}>;
  Rating: ResolverTypeWrapper<Rating>;
  Requirements: ResolverTypeWrapper<Requirements>;
  Schedule: ResolverTypeWrapper<Schedule>;
  Screenshot: ResolverTypeWrapper<Screenshot>;
  Store: ResolverTypeWrapper<Store>;
  StoreLink: ResolverTypeWrapper<StoreLink>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Tag: ResolverTypeWrapper<Tag>;
  User: ResolverTypeWrapper<User>;
  UserRegisterInput: UserRegisterInput;
  createScheduleInput: CreateScheduleInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddedByStatus: AddedByStatus;
  Boolean: Scalars['Boolean']['output'];
  Clip: Clip;
  ClipUrls: ClipUrls;
  EsrbRating: EsrbRating;
  Float: Scalars['Float']['output'];
  Game: Game;
  Genre: Genre;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  ParentPlatform: ParentPlatform;
  Platform: Platform;
  PlatformRelease: PlatformRelease;
  Query: {};
  Rating: Rating;
  Requirements: Requirements;
  Schedule: Schedule;
  Screenshot: Screenshot;
  Store: Store;
  StoreLink: StoreLink;
  String: Scalars['String']['output'];
  Tag: Tag;
  User: User;
  UserRegisterInput: UserRegisterInput;
  createScheduleInput: CreateScheduleInput;
};

export type AddedByStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddedByStatus'] = ResolversParentTypes['AddedByStatus']> = {
  beaten?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dropped?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  owned?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  playing?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  toplay?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  yet?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClipResolvers<ContextType = any, ParentType extends ResolversParentTypes['Clip'] = ResolversParentTypes['Clip']> = {
  clip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  clips?: Resolver<ResolversTypes['ClipUrls'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  video?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClipUrlsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClipUrls'] = ResolversParentTypes['ClipUrls']> = {
  full?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size320?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size640?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EsrbRatingResolvers<ContextType = any, ParentType extends ResolversParentTypes['EsrbRating'] = ResolversParentTypes['EsrbRating']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GameResolvers<ContextType = any, ParentType extends ResolversParentTypes['Game'] = ResolversParentTypes['Game']> = {
  added?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  added_by_status?: Resolver<ResolversTypes['AddedByStatus'], ParentType, ContextType>;
  background_image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  clip?: Resolver<Maybe<ResolversTypes['Clip']>, ParentType, ContextType>;
  esrb_rating?: Resolver<Maybe<ResolversTypes['EsrbRating']>, ParentType, ContextType>;
  genres?: Resolver<Array<ResolversTypes['Genre']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  metacritic?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent_platforms?: Resolver<Array<ResolversTypes['ParentPlatform']>, ParentType, ContextType>;
  platforms?: Resolver<Array<ResolversTypes['PlatformRelease']>, ParentType, ContextType>;
  playtime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rating_top?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ratings?: Resolver<Array<ResolversTypes['Rating']>, ParentType, ContextType>;
  ratings_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  released?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reviews_text_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  short_screenshots?: Resolver<Array<ResolversTypes['Screenshot']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stores?: Resolver<Array<ResolversTypes['StoreLink']>, ParentType, ContextType>;
  suggestions_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  tba?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Genre'] = ResolversParentTypes['Genre']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createSchedule?: Resolver<ResolversTypes['Schedule'], ParentType, ContextType, RequireFields<MutationCreateScheduleArgs, 'input'>>;
  login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'id' | 'password'>>;
  registerUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationRegisterUserArgs, 'input'>>;
};

export type ParentPlatformResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentPlatform'] = ResolversParentTypes['ParentPlatform']> = {
  platform?: Resolver<ResolversTypes['Platform'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlatformResolvers<ContextType = any, ParentType extends ResolversParentTypes['Platform'] = ResolversParentTypes['Platform']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlatformReleaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlatformRelease'] = ResolversParentTypes['PlatformRelease']> = {
  platform?: Resolver<ResolversTypes['Platform'], ParentType, ContextType>;
  released_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  requirements?: Resolver<Maybe<ResolversTypes['Requirements']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getGameById?: Resolver<Maybe<ResolversTypes['Game']>, ParentType, ContextType, RequireFields<QueryGetGameByIdArgs, 'id'>>;
  getGames?: Resolver<Maybe<Array<Maybe<ResolversTypes['Game']>>>, ParentType, ContextType, RequireFields<QueryGetGamesArgs, 'query'>>;
  getScheduleById?: Resolver<Maybe<ResolversTypes['Schedule']>, ParentType, ContextType, RequireFields<QueryGetScheduleByIdArgs, 'id'>>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
  getUsersBySchedule?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUsersByScheduleArgs, 'id'>>;
};

export type RatingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rating'] = ResolversParentTypes['Rating']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  percent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RequirementsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Requirements'] = ResolversParentTypes['Requirements']> = {
  minimum?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recommended?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScheduleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Schedule'] = ResolversParentTypes['Schedule']> = {
  creatorUserId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gameId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScreenshotResolvers<ContextType = any, ParentType extends ResolversParentTypes['Screenshot'] = ResolversParentTypes['Screenshot']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Store'] = ResolversParentTypes['Store']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['StoreLink'] = ResolversParentTypes['StoreLink']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  store?: Resolver<ResolversTypes['Store'], ParentType, ContextType>;
  url_en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url_ru?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  games_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image_background?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  friends?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AddedByStatus?: AddedByStatusResolvers<ContextType>;
  Clip?: ClipResolvers<ContextType>;
  ClipUrls?: ClipUrlsResolvers<ContextType>;
  EsrbRating?: EsrbRatingResolvers<ContextType>;
  Game?: GameResolvers<ContextType>;
  Genre?: GenreResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  ParentPlatform?: ParentPlatformResolvers<ContextType>;
  Platform?: PlatformResolvers<ContextType>;
  PlatformRelease?: PlatformReleaseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Rating?: RatingResolvers<ContextType>;
  Requirements?: RequirementsResolvers<ContextType>;
  Schedule?: ScheduleResolvers<ContextType>;
  Screenshot?: ScreenshotResolvers<ContextType>;
  Store?: StoreResolvers<ContextType>;
  StoreLink?: StoreLinkResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};


export type GetGamesQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;


export type GetGamesQuery = { __typename?: 'Query', getGames?: Array<{ __typename?: 'Game', id: number, name: string, slug: string, released: string, tba: boolean, background_image: string, rating: number, rating_top: number, ratings_count: number, reviews_text_count: number, added: number, metacritic?: number | null, playtime: number, suggestions_count: number, updated: string, ratings: Array<{ __typename?: 'Rating', id: number, title: string, count: number, percent: number }>, added_by_status: { __typename?: 'AddedByStatus', yet: number, owned: number, beaten: number, toplay: number, dropped: number, playing: number }, esrb_rating?: { __typename?: 'EsrbRating', id: number, name: string, slug: string } | null, platforms: Array<{ __typename?: 'PlatformRelease', released_at: string, platform: { __typename?: 'Platform', id: number, name: string, slug: string }, requirements?: { __typename?: 'Requirements', minimum: string, recommended: string } | null }>, parent_platforms: Array<{ __typename?: 'ParentPlatform', platform: { __typename?: 'Platform', id: number, name: string, slug: string } }>, genres: Array<{ __typename?: 'Genre', id: number, name: string, slug: string }>, stores: Array<{ __typename?: 'StoreLink', id: number, url_en: string, url_ru?: string | null, store: { __typename?: 'Store', id: number, name: string, slug: string } }>, clip?: { __typename?: 'Clip', clip: string, video: string, preview: string, clips: { __typename?: 'ClipUrls', size320: string, size640: string, full: string } } | null, tags: Array<{ __typename?: 'Tag', id: number, name: string, slug: string, language: string, games_count: number, image_background: string }>, short_screenshots: Array<{ __typename?: 'Screenshot', id: number, image: string }> } | null> | null };


export const GetGamesDocument = gql`
    query GetGames($query: String!) {
  getGames(query: $query) {
    id
    name
    slug
    released
    tba
    background_image
    rating
    rating_top
    ratings {
      id
      title
      count
      percent
    }
    ratings_count
    reviews_text_count
    added
    added_by_status {
      yet
      owned
      beaten
      toplay
      dropped
      playing
    }
    metacritic
    playtime
    suggestions_count
    updated
    esrb_rating {
      id
      name
      slug
    }
    platforms {
      platform {
        id
        name
        slug
      }
      released_at
      requirements {
        minimum
        recommended
      }
    }
    parent_platforms {
      platform {
        id
        name
        slug
      }
    }
    genres {
      id
      name
      slug
    }
    stores {
      id
      store {
        id
        name
        slug
      }
      url_en
      url_ru
    }
    clip {
      clip
      clips {
        size320
        size640
        full
      }
      video
      preview
    }
    tags {
      id
      name
      slug
      language
      games_count
      image_background
    }
    short_screenshots {
      id
      image
    }
  }
}
    `;

/**
 * __useGetGamesQuery__
 *
 * To run a query within a React component, call `useGetGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGamesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useGetGamesQuery(baseOptions: Apollo.QueryHookOptions<GetGamesQuery, GetGamesQueryVariables> & ({ variables: GetGamesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGamesQuery, GetGamesQueryVariables>(GetGamesDocument, options);
      }
export function useGetGamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGamesQuery, GetGamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGamesQuery, GetGamesQueryVariables>(GetGamesDocument, options);
        }
export function useGetGamesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGamesQuery, GetGamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGamesQuery, GetGamesQueryVariables>(GetGamesDocument, options);
        }
export type GetGamesQueryHookResult = ReturnType<typeof useGetGamesQuery>;
export type GetGamesLazyQueryHookResult = ReturnType<typeof useGetGamesLazyQuery>;
export type GetGamesSuspenseQueryHookResult = ReturnType<typeof useGetGamesSuspenseQuery>;
export type GetGamesQueryResult = Apollo.QueryResult<GetGamesQuery, GetGamesQueryVariables>;