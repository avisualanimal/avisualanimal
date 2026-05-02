import { type SchemaTypeDefinition } from 'sanity'

// Documents
import { homepage } from './documents/homepage'
import { project } from './documents/project'

// Blocks
import { fullBleedImage } from './blocks/fullBleedImage'
import { twoColumnMix } from './blocks/twoColumnMix'
import { autoPlayVideo } from './blocks/autoPlayVideo'
import { pullQuote } from './blocks/pullQuote'
import { marqueeSlider } from './blocks/marqueeSlider'
import { marqueeVideo } from './blocks/marqueeVideo'
import { twoColumnImage } from './blocks/twoColumnImage'
import { oneColumnImage } from './blocks/oneColumnImage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepage,
    project,
    fullBleedImage,
    twoColumnMix,
    autoPlayVideo,
    pullQuote,
    marqueeSlider,
    marqueeVideo,
    twoColumnImage,
    oneColumnImage,
  ],
}
