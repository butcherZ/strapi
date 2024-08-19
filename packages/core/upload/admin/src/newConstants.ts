// TODO: to replace with the import from the index file in the utils when it will be migrated to TypeScript
import { getTrad } from './utils/getTrad';

// TODO: replace with the constants file when it will be migrated to TS
export enum AssetType {
  Video = 'video',
  Image = 'image',
  Document = 'doc',
  Audio = 'audio',
}

export enum AssetSource {
  Url = 'url',
  Computer = 'computer',
}

export const sortOptions = [
  { key: 'sort.created_at_desc', value: 'createdAt:DESC' },
  { key: 'sort.created_at_asc', value: 'createdAt:ASC' },
  { key: 'sort.name_asc', value: 'name:ASC' },
  { key: 'sort.name_desc', value: 'name:DESC' },
  { key: 'sort.updated_at_desc', value: 'updatedAt:DESC' },
  { key: 'sort.updated_at_asc', value: 'updatedAt:ASC' },
];

export const PERMISSIONS = {
  // This permission regards the main component (App) and is used to tell
  // If the plugin link should be displayed in the menu
  // And also if the plugin is accessible. This use case is found when a user types the url of the
  // plugin directly in the browser
  main: [
    { action: 'plugin::upload.read', subject: null },
    {
      action: 'plugin::upload.assets.create',
      subject: null,
    },
    {
      action: 'plugin::upload.assets.update',
      subject: null,
    },
  ],
  copyLink: [
    {
      action: 'plugin::upload.assets.copy-link',
      subject: null,
    },
  ],
  create: [
    {
      action: 'plugin::upload.assets.create',
      subject: null,
    },
  ],
  download: [
    {
      action: 'plugin::upload.assets.download',
      subject: null,
    },
  ],
  read: [{ action: 'plugin::upload.read', subject: null }],
  configureView: [{ action: 'plugin::upload.configure-view', subject: null }],
  settings: [{ action: 'plugin::upload.settings.read', subject: null }],
  update: [{ action: 'plugin::upload.assets.update', subject: null, fields: null }],
};

export const tableHeaders = [
  {
    name: 'preview',
    key: 'preview',
    metadatas: {
      label: { id: getTrad('list.table.header.preview'), defaultMessage: 'preview' },
      isSortable: false,
    },
    type: 'image',
  },
  {
    name: 'name',
    key: 'name',
    metadatas: {
      label: { id: getTrad('list.table.header.name'), defaultMessage: 'name' },
      isSortable: true,
    },
    type: 'text',
  },
  {
    name: 'ext',
    key: 'extension',
    metadatas: {
      label: { id: getTrad('list.table.header.ext'), defaultMessage: 'extension' },
      isSortable: false,
    },
    type: 'ext',
  },
  {
    name: 'size',
    key: 'size',
    metadatas: {
      label: { id: getTrad('list.table.header.size'), defaultMessage: 'size' },
      isSortable: false,
    },
    type: 'size',
  },
  {
    name: 'createdAt',
    key: 'createdAt',
    metadatas: {
      label: { id: getTrad('list.table.header.createdAt'), defaultMessage: 'created' },
      isSortable: true,
    },
    type: 'date',
  },
  {
    name: 'updatedAt',
    key: 'updatedAt',
    metadatas: {
      label: { id: getTrad('list.table.header.updatedAt'), defaultMessage: 'last update' },
      isSortable: true,
    },
    type: 'date',
  },
];