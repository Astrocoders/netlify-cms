import cms from '../core';
import uploadcare from './media-library-uploadcare';

const { registerMediaLibrary } = cms;

registerMediaLibrary(uploadcare);
