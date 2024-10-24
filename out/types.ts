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
  location: string;
};
export type User = {
  _id: string;
  username: string;
  discriminator: string;
  display_name: string;
  avatar: File;
  relations: Relationship[];
  badges: number;
  status: UserStatus;
  flags: number;
  privileged: boolean;
  bot: BotInformation;
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
  deleted: boolean;
  reported: boolean;
  message_id: string;
  user_id: string;
  server_id: string;
  object_id: string;
};
export type Metadata = unknown;
export type Relationship = {
  _id: string;
  status: RelationshipStatus;
};
export type RelationshipStatus = string;
export type UserStatus = {
  text: string;
  presence: Presence;
};
export type Presence = string;
export type BotInformation = {
  owner: string;
};
export type Id = string;
export type FlagResponse = {
  flags: number;
};
export type DataEditUser = {
  display_name: string;
  avatar: string;
  status: UserStatus;
  profile: DataUserProfile;
  badges: number;
  flags: number;
  remove: FieldsUser[];
};
export type DataUserProfile = {
  content: string;
  background: string;
};
export type FieldsUser = string;
export type DataChangeUsername = {
  username: string;
  password: string;
};
export type UserProfile = {
  content: string;
  background: File;
};
export type Channel = unknown;
export type OverrideField = {
  a: number;
  d: number;
};
export type MutualResponse = {
  users: string;
  servers: string;
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
  analytics: boolean;
  discoverable: boolean;
  interactions_url: string;
  terms_of_service_url: string;
  privacy_policy_url: string;
  flags: number;
};
export type DataCreateBot = {
  name: string;
};
export type InviteBotDestination = unknown;
export type PublicBot = {
  _id: string;
  username: string;
  avatar: string;
  description: string;
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
  analytics: boolean;
  discoverable: boolean;
  interactions_url: string;
  terms_of_service_url: string;
  privacy_policy_url: string;
  flags: number;
};
export type OwnedBotsResponse = {
  bots: Bot[];
  users: User[];
};
export type DataEditBot = {
  name: string;
  public: boolean;
  analytics: boolean;
  interactions_url: string;
  remove: FieldsBot[];
};
export type FieldsBot = string;
export type DataEditChannel = {
  name: string;
  description: string;
  owner: string;
  icon: string;
  nsfw: boolean;
  archived: boolean;
  remove: FieldsChannel[];
};
export type FieldsChannel = string;
export type Invite = unknown;
export type Message = {
  _id: string;
  nonce: string;
  channel: string;
  author: string;
  user: User;
  member: Member;
  webhook: MessageWebhook;
  content: string;
  system: SystemMessage;
  attachments: File[];
  edited: ISO8601_Timestamp;
  embeds: Embed[];
  mentions: string;
  replies: string;
  reactions: unknown;
  interactions: Interactions;
  masquerade: Masquerade;
  flags: number;
};
export type Member = {
  _id: MemberCompositeKey;
  joined_at: ISO8601_Timestamp;
  nickname: string;
  avatar: File;
  roles: string;
  timeout: ISO8601_Timestamp;
};
export type MemberCompositeKey = {
  server: string;
  user: string;
};
export type ISO8601_Timestamp = string;
export type MessageWebhook = {
  name: string;
  avatar: string;
};
export type SystemMessage = unknown;
export type Embed = unknown;
export type Special = unknown;
export type LightspeedType = string;
export type TwitchType = string;
export type BandcampType = string;
export type Image = {
  url: string;
  width: number;
  height: number;
  size: ImageSize;
};
export type ImageSize = string;
export type Video = {
  url: string;
  width: number;
  height: number;
};
export type Interactions = {
  reactions: string;
  restrict_reactions: boolean;
};
export type Masquerade = {
  name: string;
  avatar: string;
  colour: string;
};
export type DataMessageSend = {
  nonce: string;
  content: string;
  attachments: string;
  replies: ReplyIntent[];
  embeds: SendableEmbed[];
  masquerade: Masquerade;
  interactions: Interactions;
  flags: number;
};
export type ReplyIntent = {
  id: string;
  mention: boolean;
};
export type SendableEmbed = {
  icon_url: string;
  url: string;
  title: string;
  description: string;
  media: string;
  colour: string;
};
export type BulkMessageResponse = unknown;
export type MessageSort = string;
export type DataMessageSearch = {
  query: string;
  limit: number;
  before: string;
  after: string;
  sort: MessageSort;
  include_users: boolean;
};
export type DataEditMessage = {
  content: string;
  embeds: SendableEmbed[];
};
export type OptionsBulkDelete = {
  ids: string;
};
export type DataCreateGroup = {
  name: string;
  description: string;
  icon: string;
  users: string;
  nsfw: boolean;
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
export type DataDefaultChannelPermissions = unknown;
export type Webhook = {
  id: string;
  name: string;
  avatar: File;
  channel_id: string;
  permissions: number;
  token: string;
};
export type CreateWebhookBody = {
  name: string;
  avatar: string;
};
export type CreateServerLegacyResponse = {
  server: Server;
  channels: Channel[];
};
export type Server = {
  _id: string;
  owner: string;
  name: string;
  description: string;
  channels: string;
  categories: Category[];
  system_messages: SystemMessageChannels;
  roles: unknown;
  default_permissions: number;
  icon: File;
  banner: File;
  flags: number;
  nsfw: boolean;
  analytics: boolean;
  discoverable: boolean;
};
export type Category = {
  id: string;
  title: string;
  channels: string;
};
export type SystemMessageChannels = {
  user_joined: string;
  user_left: string;
  user_kicked: string;
  user_banned: string;
};
export type Role = {
  name: string;
  permissions: OverrideField;
  colour: string;
  hoist: boolean;
  rank: number;
};
export type DataCreateServer = {
  name: string;
  description: string;
  nsfw: boolean;
};
export type FetchServerResponse = unknown;
export type DataEditServer = {
  name: string;
  description: string;
  icon: string;
  banner: string;
  categories: Category[];
  system_messages: SystemMessageChannels;
  flags: number;
  discoverable: boolean;
  analytics: boolean;
  remove: FieldsServer[];
};
export type FieldsServer = string;
export type DataCreateServerChannel = {
  type: LegacyServerChannelType;
  name: string;
  description: string;
  nsfw: boolean;
};
export type LegacyServerChannelType = string;
export type AllMemberResponse = {
  members: Member[];
  users: User[];
};
export type MemberResponse = unknown;
export type DataMemberEdit = {
  nickname: string;
  avatar: string;
  roles: string;
  timeout: ISO8601_Timestamp;
  remove: FieldsMember[];
};
export type FieldsMember = string;
export type MemberQueryResponse = {
  members: Member[];
  users: User[];
};
export type ServerBan = {
  _id: MemberCompositeKey;
  reason: string;
};
export type DataBanCreate = {
  reason: string;
};
export type BanListResult = {
  users: BannedUser[];
  bans: ServerBan[];
};
export type BannedUser = {
  _id: string;
  username: string;
  discriminator: string;
  avatar: File;
};
export type NewRoleResponse = {
  id: string;
  role: Role;
};
export type DataCreateRole = {
  name: string;
  rank: number;
};
export type DataEditRole = {
  name: string;
  colour: string;
  hoist: boolean;
  rank: number;
  remove: FieldsRole[];
};
export type FieldsRole = string;
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
  animated: boolean;
  nsfw: boolean;
};
export type EmojiParent = unknown;
export type InviteResponse = unknown;
export type InviteJoinResponse = unknown;
export type DataCreateEmoji = {
  name: string;
  parent: EmojiParent;
  nsfw: boolean;
};
export type DataReportContent = {
  content: ReportedContent;
  additional_context: string;
};
export type ReportedContent = unknown;
export type ContentReportReason = string;
export type UserReportReason = string;
export type Authifier_Error = unknown;
export type DataCreateAccount = {
  email: string;
  password: string;
  invite: string;
  captcha: string;
};
export type DataResendVerification = {
  email: string;
  captcha: string;
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
export type ResponseVerify = unknown;
export type MFATicket = {
  _id: string;
  account_id: string;
  token: string;
  validated: boolean;
  authorised: boolean;
  last_totp_code: string;
};
export type DataPasswordReset = {
  token: string;
  password: string;
  remove_sessions: boolean;
};
export type DataSendPasswordReset = {
  email: string;
  captcha: string;
};
export type ResponseLogin = unknown;
export type WebPushSubscription = {
  endpoint: string;
  p256dh: string;
  auth: string;
};
export type MFAMethod = string;
export type DataLogin = unknown;
export type MFAResponse = unknown;
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
  keys: string;
};
export type ChannelUnread = {
  _id: ChannelCompositeKey;
  last_id: string;
  mentions: string;
};
export type ChannelCompositeKey = {
  channel: string;
  user: string;
};
