import { type SchemaTypeDefinition } from 'sanity'

// Documents
import { project } from './documents/project'

// Blocks
import { fullBleedImage } from './blocks/fullBleedImage'
import { twoColumnMix } from './blocks/twoColumnMix'
import { autoPlayVideo } from './blocks/autoPlayVideo'
import { pullQuote } from './blocks/pullQuote'
import { marqueeSlider } from './blocks/marqueeSlider'
import { twoColumnImage } from './blocks/twoColumnImage'
import { oneColumnImage } from './blocks/oneColumnImage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    project,
    fullBleedImage,
    twoColumnMix,
    autoPlayVideo,
    pullQuote,
    marqueeSlider,
    twoColumnImage,
    oneColumnImage,
  ],
}
