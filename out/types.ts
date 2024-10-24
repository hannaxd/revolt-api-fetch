export type RevoltConfig = {
  revolt: string;
  features: RevoltFeatures;
  ws: string;
  app: string;
  vapid: string;
  build: BuildInformation;
};
export type RevoltFeatures = {
  captcha: CaptchaFeature;
  email: boolean;
  invite_only: boolean;
  autumn: Feature;
  january: Feature;
  voso: VoiceFeature;
};
export type CaptchaFeature = {
  enabled: boolean;
  key: string;
};
export type Feature = {
  enabled: boolean;
  url: string;
};
export type VoiceFeature = {
  enabled: boolean;
  url: string;
  ws: string;
};
export type BuildInformation = {
  commit_sha: string;
  commit_timestamp: string;
  semver: string;
  origin_url: string;
  timestamp: string;
};
export type Error = {
  type: "LabelMe";
} | {
  type: "AlreadyOnboarded";
} | {
  type: "UsernameTaken";
} | {
  type: "InvalidUsername";
} | {
  type: "DiscriminatorChangeRatelimited";
} | {
  type: "UnknownUser";
} | {
  type: "AlreadyFriends";
} | {
  type: "AlreadySentRequest";
} | {
  type: "Blocked";
} | {
  type: "BlockedByOther";
} | {
  type: "NotFriends";
} | {
  type: "TooManyPendingFriendRequests";
  max: number;
} | {
  type: "UnknownChannel";
} | {
  type: "UnknownAttachment";
} | {
  type: "UnknownMessage";
} | {
  type: "CannotEditMessage";
} | {
  type: "CannotJoinCall";
} | {
  type: "TooManyAttachments";
  max: number;
} | {
  type: "TooManyEmbeds";
  max: number;
} | {
  type: "TooManyReplies";
  max: number;
} | {
  type: "TooManyChannels";
  max: number;
} | {
  type: "EmptyMessage";
} | {
  type: "PayloadTooLarge";
} | {
  type: "CannotRemoveYourself";
} | {
  type: "GroupTooLarge";
  max: number;
} | {
  type: "AlreadyInGroup";
} | {
  type: "NotInGroup";
} | {
  type: "UnknownServer";
} | {
  type: "InvalidRole";
} | {
  type: "Banned";
} | {
  type: "TooManyServers";
  max: number;
} | {
  type: "TooManyEmoji";
  max: number;
} | {
  type: "TooManyRoles";
  max: number;
} | {
  type: "AlreadyInServer";
} | {
  type: "ReachedMaximumBots";
} | {
  type: "IsBot";
} | {
  type: "BotIsPrivate";
} | {
  type: "CannotReportYourself";
} | {
  type: "MissingPermission";
  permission: string;
} | {
  type: "MissingUserPermission";
  permission: string;
} | {
  type: "NotElevated";
} | {
  type: "NotPrivileged";
} | {
  type: "CannotGiveMissingPermissions";
} | {
  type: "NotOwner";
} | {
  type: "DatabaseError";
  operation: string;
  collection: string;
} | {
  type: "InternalError";
} | {
  type: "InvalidOperation";
} | {
  type: "InvalidCredentials";
} | {
  type: "InvalidProperty";
} | {
  type: "InvalidSession";
} | {
  type: "DuplicateNonce";
} | {
  type: "NotFound";
} | {
  type: "NoEffect";
} | {
  type: "FailedValidation";
  error: string;
} | {
  type: "VosoUnavailable";
};
export type User = {
  _id: string;
  username: string;
  discriminator: string;
  display_name?: string | null;
  avatar?: File | null;
  relations?: Relationship[];
  badges?: number;
  status?: UserStatus | null;
  flags?: number;
  privileged?: boolean;
  bot?: BotInformation | null;
  relationship: RelationshipStatus;
  online: boolean;
};
export type File = {
  _id: string;
  tag: string;
  filename: string;
  metadata: Metadata;
  content_type: string;
  size: number;
  deleted?: boolean | null;
  reported?: boolean | null;
  message_id?: string | null;
  user_id?: string | null;
  server_id?: string | null;
  object_id?: string | null;
};
export type Metadata = {
  type: "File";
} | {
  type: "Text";
} | {
  type: "Image";
  width: number;
  height: number;
} | {
  type: "Video";
  width: number;
  height: number;
} | {
  type: "Audio";
};
export type Relationship = {
  _id: string;
  status: RelationshipStatus;
};
export type RelationshipStatus =
  | "None"
  | "User"
  | "Friend"
  | "Outgoing"
  | "Incoming"
  | "Blocked"
  | "BlockedOther";
export type UserStatus = {
  text?: string | null;
  presence?: Presence | null;
};
export type Presence = "Online" | "Idle" | "Focus" | "Busy" | "Invisible";
export type BotInformation = {
  owner: string;
};
export type Id = string;
export type FlagResponse = {
  flags: number;
};
export type DataEditUser = {
  display_name?: string | null;
  avatar?: string | null;
  status?: UserStatus | null;
  profile?: DataUserProfile | null;
  badges?: number | null;
  flags?: number | null;
  remove?: FieldsUser[] | null;
};
export type DataUserProfile = {
  content?: string | null;
  background?: string | null;
};
export type FieldsUser =
  | "Avatar"
  | "StatusText"
  | "StatusPresence"
  | "ProfileContent"
  | "ProfileBackground"
  | "DisplayName";
export type DataChangeUsername = {
  username: string;
  password: string;
};
export type UserProfile = {
  content?: string | null;
  background?: File | null;
};
export type Channel = {
  channel_type: "SavedMessages";
  _id: string;
  user: string;
} | {
  channel_type: "DirectMessage";
  _id: string;
  active: boolean;
  recipients: string[];
  last_message_id?: string | null;
} | {
  channel_type: "Group";
  _id: string;
  name: string;
  owner: string;
  description?: string | null;
  recipients: string[];
  icon?: File | null;
  last_message_id?: string | null;
  permissions?: number | null;
  nsfw?: boolean;
} | {
  channel_type: "TextChannel";
  _id: string;
  server: string;
  name: string;
  description?: string | null;
  icon?: File | null;
  last_message_id?: string | null;
  default_permissions?: OverrideField | null;
  role_permissions?: {
    [key: string]: OverrideField;
  };
  nsfw?: boolean;
} | {
  channel_type: "VoiceChannel";
  _id: string;
  server: string;
  name: string;
  description?: string | null;
  icon?: File | null;
  default_permissions?: OverrideField | null;
  role_permissions?: {
    [key: string]: OverrideField;
  };
  nsfw?: boolean;
};
export type OverrideField = {
  a: number;
  d: number;
};
export type MutualResponse = {
  users: string[];
  servers: string[];
};
export type DataSendFriendRequest = {
  username: string;
};
export type BotWithUserResponse = {
  user: User;
  _id: string;
  owner: string;
  token: string;
  public: boolean;
  analytics?: boolean;
  discoverable?: boolean;
  interactions_url?: string;
  terms_of_service_url?: string;
  privacy_policy_url?: string;
  flags?: number;
};
export type DataCreateBot = {
  name: string;
};
export type InviteBotDestination = {
  server: string;
} | {
  group: string;
};
export type PublicBot = {
  _id: string;
  username: string;
  avatar?: string;
  description?: string;
};
export type FetchBotResponse = {
  bot: Bot;
  user: User;
};
export type Bot = {
  _id: string;
  owner: string;
  token: string;
  public: boolean;
  analytics?: boolean;
  discoverable?: boolean;
  interactions_url?: string;
  terms_of_service_url?: string;
  privacy_policy_url?: string;
  flags?: number;
};
export type OwnedBotsResponse = {
  bots: Bot[];
  users: User[];
};
export type DataEditBot = {
  name?: string | null;
  public?: boolean | null;
  analytics?: boolean | null;
  interactions_url?: string | null;
  remove?: FieldsBot[] | null;
};
export type FieldsBot = "Token" | "InteractionsURL";
export type DataEditChannel = {
  name?: string | null;
  description?: string | null;
  owner?: string | null;
  icon?: string | null;
  nsfw?: boolean | null;
  archived?: boolean | null;
  remove?: FieldsChannel[] | null;
};
export type FieldsChannel = "Description" | "Icon" | "DefaultPermissions";
export type Invite = {
  type: "Server";
  _id: string;
  server: string;
  creator: string;
  channel: string;
} | {
  type: "Group";
  _id: string;
  creator: string;
  channel: string;
};
export type Message = {
  _id: string;
  nonce?: string | null;
  channel: string;
  author: string;
  user?: User | null;
  member?: Member | null;
  webhook?: MessageWebhook | null;
  content?: string | null;
  system?: SystemMessage | null;
  attachments?: File[] | null;
  edited?: ISO8601_Timestamp | null;
  embeds?: Embed[] | null;
  mentions?: string[] | null;
  replies?: string[] | null;
  reactions?: {
    [key: string]: string[];
  };
  interactions?: Interactions;
  masquerade?: Masquerade | null;
  flags?: number;
};
export type Member = {
  _id: MemberCompositeKey;
  joined_at: ISO8601_Timestamp;
  nickname?: string | null;
  avatar?: File | null;
  roles?: string[];
  timeout?: ISO8601_Timestamp | null;
};
export type MemberCompositeKey = {
  server: string;
  user: string;
};
export type ISO8601_Timestamp = string;
export type MessageWebhook = {
  name: string;
  avatar?: string | null;
};
export type SystemMessage = {
  type: "text";
  content: string;
} | {
  type: "user_added";
  id: string;
  by: string;
} | {
  type: "user_remove";
  id: string;
  by: string;
} | {
  type: "user_joined";
  id: string;
} | {
  type: "user_left";
  id: string;
} | {
  type: "user_kicked";
  id: string;
} | {
  type: "user_banned";
  id: string;
} | {
  type: "channel_renamed";
  name: string;
  by: string;
} | {
  type: "channel_description_changed";
  by: string;
} | {
  type: "channel_icon_changed";
  by: string;
} | {
  type: "channel_ownership_changed";
  from: string;
  to: string;
};
export type Embed = {
  type: "Website";
  url?: string | null;
  original_url?: string | null;
  special?: Special | null;
  title?: string | null;
  description?: string | null;
  image?: Image | null;
  video?: Video | null;
  site_name?: string | null;
  icon_url?: string | null;
  colour?: string | null;
} | {
  type: "Image";
  url: string;
  width: number;
  height: number;
  size: ImageSize;
} | {
  type: "Video";
  url: string;
  width: number;
  height: number;
} | {
  type: "Text";
  icon_url?: string | null;
  url?: string | null;
  title?: string | null;
  description?: string | null;
  media?: File | null;
  colour?: string | null;
} | {
  type: "None";
};
export type Special = {
  type: "None";
} | {
  type: "GIF";
} | {
  type: "YouTube";
  id: string;
  timestamp?: string | null;
} | {
  type: "Lightspeed";
  content_type: LightspeedType;
  id: string;
} | {
  type: "Twitch";
  content_type: TwitchType;
  id: string;
} | {
  type: "Spotify";
  content_type: string;
  id: string;
} | {
  type: "Soundcloud";
} | {
  type: "Bandcamp";
  content_type: BandcampType;
  id: string;
} | {
  type: "Streamable";
  id: string;
};
export type LightspeedType = "Channel";
export type TwitchType = "Channel" | "Video" | "Clip";
export type BandcampType = "Album" | "Track";
export type Image = {
  url: string;
  width: number;
  height: number;
  size: ImageSize;
};
export type ImageSize = "Large" | "Preview";
export type Video = {
  url: string;
  width: number;
  height: number;
};
export type Interactions = {
  reactions?: string[] | null;
  restrict_reactions?: boolean;
};
export type Masquerade = {
  name?: string | null;
  avatar?: string | null;
  colour?: string | null;
};
export type DataMessageSend = {
  nonce?: string | null;
  content?: string | null;
  attachments?: string[] | null;
  replies?: ReplyIntent[] | null;
  embeds?: SendableEmbed[] | null;
  masquerade?: Masquerade | null;
  interactions?: Interactions | null;
  flags?: number | null;
};
export type ReplyIntent = {
  id: string;
  mention: boolean;
};
export type SendableEmbed = {
  icon_url?: string | null;
  url?: string | null;
  title?: string | null;
  description?: string | null;
  media?: string | null;
  colour?: string | null;
};
export type BulkMessageResponse = Message[] | {
  messages: Message[];
  users: User[];
  members?: Member[] | null;
};
export type MessageSort = "Relevance" | "Latest" | "Oldest";
export type DataMessageSearch = {
  query: string;
  limit?: number | null;
  before?: string | null;
  after?: string | null;
  sort?: MessageSort;
  include_users?: boolean | null;
};
export type DataEditMessage = {
  content?: string | null;
  embeds?: SendableEmbed[] | null;
};
export type OptionsBulkDelete = {
  ids: string[];
};
export type DataCreateGroup = {
  name: string;
  description?: string | null;
  icon?: string | null;
  users?: string[];
  nsfw?: boolean | null;
};
export type LegacyCreateVoiceUserResponse = {
  token: string;
};
export type DataSetRolePermissions = {
  permissions: Override;
};
export type Override = {
  allow: number;
  deny: number;
};
export type DataDefaultChannelPermissions = {
  permissions: number;
} | {
  permissions: Override;
};
export type Webhook = {
  id: string;
  name: string;
  avatar?: File | null;
  channel_id: string;
  permissions: number;
  token?: string | null;
};
export type CreateWebhookBody = {
  name: string;
  avatar?: string | null;
};
export type CreateServerLegacyResponse = {
  server: Server;
  channels: Channel[];
};
export type Server = {
  _id: string;
  owner: string;
  name: string;
  description?: string | null;
  channels: string[];
  categories?: Category[] | null;
  system_messages?: SystemMessageChannels | null;
  roles?: {
    [key: string]: Role;
  };
  default_permissions: number;
  icon?: File | null;
  banner?: File | null;
  flags?: number;
  nsfw?: boolean;
  analytics?: boolean;
  discoverable?: boolean;
};
export type Category = {
  id: string;
  title: string;
  channels: string[];
};
export type SystemMessageChannels = {
  user_joined?: string | null;
  user_left?: string | null;
  user_kicked?: string | null;
  user_banned?: string | null;
};
export type Role = {
  name: string;
  permissions: OverrideField;
  colour?: string | null;
  hoist?: boolean;
  rank?: number;
};
export type DataCreateServer = {
  name: string;
  description?: string | null;
  nsfw?: boolean | null;
};
export type FetchServerResponse = Server | {
  channels: string[];
  _id: string;
  owner: string;
  name: string;
  description?: string | null;
  categories?: Category[] | null;
  system_messages?: SystemMessageChannels | null;
  roles?: {
    [key: string]: Role;
  };
  default_permissions: number;
  icon?: File | null;
  banner?: File | null;
  flags?: number;
  nsfw?: boolean;
  analytics?: boolean;
  discoverable?: boolean;
};
export type DataEditServer = {
  name?: string | null;
  description?: string | null;
  icon?: string | null;
  banner?: string | null;
  categories?: Category[] | null;
  system_messages?: SystemMessageChannels | null;
  flags?: number | null;
  discoverable?: boolean | null;
  analytics?: boolean | null;
  remove?: FieldsServer[] | null;
};
export type FieldsServer =
  | "Description"
  | "Categories"
  | "SystemMessages"
  | "Icon"
  | "Banner";
export type DataCreateServerChannel = {
  type?: LegacyServerChannelType;
  name: string;
  description?: string | null;
  nsfw?: boolean | null;
};
export type LegacyServerChannelType = "Text" | "Voice";
export type AllMemberResponse = {
  members: Member[];
  users: User[];
};
export type MemberResponse = Member | {
  member: Member;
  roles: {
    [key: string]: Role;
  };
};
export type DataMemberEdit = {
  nickname?: string | null;
  avatar?: string | null;
  roles?: string[] | null;
  timeout?: ISO8601_Timestamp | null;
  remove?: FieldsMember[] | null;
};
export type FieldsMember = "Nickname" | "Avatar" | "Roles" | "Timeout";
export type MemberQueryResponse = {
  members: Member[];
  users: User[];
};
export type ServerBan = {
  _id: MemberCompositeKey;
  reason?: string | null;
};
export type DataBanCreate = {
  reason?: string | null;
};
export type BanListResult = {
  users: BannedUser[];
  bans: ServerBan[];
};
export type BannedUser = {
  _id: string;
  username: string;
  discriminator: string;
  avatar?: File | null;
};
export type NewRoleResponse = {
  id: string;
  role: Role;
};
export type DataCreateRole = {
  name: string;
  rank?: number | null;
};
export type DataEditRole = {
  name?: string | null;
  colour?: string | null;
  hoist?: boolean | null;
  rank?: number | null;
  remove?: FieldsRole[] | null;
};
export type FieldsRole = "Colour";
export type DataSetServerRolePermission = {
  permissions: Override;
};
export type DataPermissionsValue = {
  permissions: number;
};
export type Emoji = {
  _id: string;
  parent: EmojiParent;
  creator_id: string;
  name: string;
  animated?: boolean;
  nsfw?: boolean;
};
export type EmojiParent = {
  type: "Server";
  id: string;
} | {
  type: "Detached";
};
export type InviteResponse = {
  type: "Server";
  code: string;
  server_id: string;
  server_name: string;
  server_icon?: File | null;
  server_banner?: File | null;
  server_flags?: number | null;
  channel_id: string;
  channel_name: string;
  channel_description?: string | null;
  user_name: string;
  user_avatar?: File | null;
  member_count: number;
} | {
  type: "Group";
  code: string;
  channel_id: string;
  channel_name: string;
  channel_description?: string | null;
  user_name: string;
  user_avatar?: File | null;
};
export type InviteJoinResponse = {
  type: "Server";
  channels: Channel[];
  server: Server;
} | {
  type: "Group";
  channel: Channel;
  users: User[];
};
export type DataCreateEmoji = {
  name: string;
  parent: EmojiParent;
  nsfw?: boolean;
};
export type DataReportContent = {
  content: ReportedContent;
  additional_context?: string;
};
export type ReportedContent = {
  type: "Message";
  id: string;
  report_reason: ContentReportReason;
} | {
  type: "Server";
  id: string;
  report_reason: ContentReportReason;
} | {
  type: "User";
  id: string;
  report_reason: UserReportReason;
  message_id?: string | null;
};
export type ContentReportReason =
  | "NoneSpecified"
  | "Illegal"
  | "IllegalGoods"
  | "IllegalExtortion"
  | "IllegalPornography"
  | "IllegalHacking"
  | "ExtremeViolence"
  | "PromotesHarm"
  | "UnsolicitedSpam"
  | "Raid"
  | "SpamAbuse"
  | "ScamsFraud"
  | "Malware"
  | "Harassment";
export type UserReportReason =
  | "NoneSpecified"
  | "UnsolicitedSpam"
  | "SpamAbuse"
  | "InappropriateProfile"
  | "Impersonation"
  | "BanEvasion"
  | "Underage";
export type Authifier_Error = {
  type: "IncorrectData";
  with: string;
} | {
  type: "DatabaseError";
  operation: string;
  with: string;
} | {
  type: "InternalError";
} | {
  type: "OperationFailed";
} | {
  type: "RenderFail";
} | {
  type: "MissingHeaders";
} | {
  type: "CaptchaFailed";
} | {
  type: "BlockedByShield";
} | {
  type: "InvalidSession";
} | {
  type: "UnverifiedAccount";
} | {
  type: "UnknownUser";
} | {
  type: "EmailFailed";
} | {
  type: "InvalidToken";
} | {
  type: "MissingInvite";
} | {
  type: "InvalidInvite";
} | {
  type: "InvalidCredentials";
} | {
  type: "CompromisedPassword";
} | {
  type: "ShortPassword";
} | {
  type: "Blacklisted";
} | {
  type: "LockedOut";
} | {
  type: "TotpAlreadyEnabled";
} | {
  type: "DisallowedMFAMethod";
};
export type DataCreateAccount = {
  email: string;
  password: string;
  invite?: string | null;
  captcha?: string | null;
};
export type DataResendVerification = {
  email: string;
  captcha?: string | null;
};
export type DataAccountDeletion = {
  token: string;
};
export type AccountInfo = {
  _id: string;
  email: string;
};
export type DataChangePassword = {
  password: string;
  current_password: string;
};
export type DataChangeEmail = {
  email: string;
  current_password: string;
};
export type ResponseVerify = null | {
  ticket: MFATicket;
};
export type MFATicket = {
  _id: string;
  account_id: string;
  token: string;
  validated: boolean;
  authorised: boolean;
  last_totp_code?: string | null;
};
export type DataPasswordReset = {
  token: string;
  password: string;
  remove_sessions?: boolean;
};
export type DataSendPasswordReset = {
  email: string;
  captcha?: string | null;
};
export type ResponseLogin = {
  result: "Success";
  _id: string;
  user_id: string;
  token: string;
  name: string;
  subscription?: WebPushSubscription | null;
} | {
  result: "MFA";
  ticket: string;
  allowed_methods: MFAMethod[];
} | {
  result: "Disabled";
  user_id: string;
};
export type WebPushSubscription = {
  endpoint: string;
  p256dh: string;
  auth: string;
};
export type MFAMethod = "Password" | "Recovery" | "Totp";
export type DataLogin = {
  email: string;
  password: string;
  friendly_name?: string | null;
} | {
  mfa_ticket: string;
  mfa_response?: MFAResponse | null;
  friendly_name?: string | null;
};
export type MFAResponse = {
  password: string;
} | {
  recovery_code: string;
} | {
  totp_code: string;
};
export type SessionInfo = {
  _id: string;
  name: string;
};
export type DataEditSession = {
  friendly_name: string;
};
export type MultiFactorStatus = {
  email_otp: boolean;
  trusted_handover: boolean;
  email_mfa: boolean;
  totp_mfa: boolean;
  security_key_mfa: boolean;
  recovery_active: boolean;
};
export type ResponseTotpSecret = {
  secret: string;
};
export type DataHello = {
  onboarding: boolean;
};
export type DataOnboard = {
  username: string;
};
export type OptionsFetchSettings = {
  keys: string[];
};
export type ChannelUnread = {
  _id: ChannelCompositeKey;
  last_id?: string | null;
  mentions?: string[];
};
export type ChannelCompositeKey = {
  channel: string;
  user: string;
};
