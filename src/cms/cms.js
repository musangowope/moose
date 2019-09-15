import CMS from 'netlify-cms'
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewTemplate('blog', BlogPostPreview)
