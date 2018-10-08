import cms from '../core'
import { StringControl, StringPreview } from './string'
import { NumberControl, NumberPreview } from './number'
import { TextControl, TextPreview } from './text'
import { ImageControl, ImagePreview } from './image'
import { FileControl, FilePreview } from './file'
import { DateControl, DatePreview } from './date'
import { DateTimeControl, DateTimePreview } from './datetime'
import { SelectControl, SelectPreview } from './select'
import { MarkdownControl, MarkdownPreview } from './markdown'
import { ListControl, ListPreview } from './list'
import { ObjectControl, ObjectPreview } from './object'
import { RelationControl, RelationPreview } from './relation'
import { RelationSelectControl, RelationSelectPreview } from './relationSelect'
import { BooleanControl } from './boolean'

const { registerWidget } = cms

registerWidget('string', StringControl, StringPreview)
registerWidget('text', TextControl, TextPreview)
registerWidget('number', NumberControl, NumberPreview)
registerWidget('list', ListControl, ListPreview)
registerWidget('markdown', MarkdownControl, MarkdownPreview)
registerWidget('image', ImageControl, ImagePreview)
registerWidget('file', FileControl, FilePreview)
registerWidget('date', DateControl, DatePreview)
registerWidget('datetime', DateTimeControl, DateTimePreview)
registerWidget('select', SelectControl, SelectPreview)
registerWidget('object', ObjectControl, ObjectPreview)
registerWidget('relation', RelationControl, RelationPreview)
registerWidget('relationSelect', RelationSelectControl, RelationSelectPreview)
registerWidget('boolean', BooleanControl)
