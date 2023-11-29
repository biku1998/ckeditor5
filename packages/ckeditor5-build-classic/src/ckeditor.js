/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';

import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	CloudServices,
	SimpleUploadAdapter,
	TodoList,
	Subscript,
	Superscript,
	Strikethrough,
	HorizontalLine,
	Highlight,
	FontSize,
	FontColor,
	FontBackgroundColor,
	FindAndReplace,
	Essentials,
	Alignment,
	AutoImage,
	Autoformat,
	AutoLink,
	Bold,
	Italic,
	Underline,
	BlockQuote,
	Code,
	CodeBlock,
	EasyImage,
	Heading,
	Image,
	ImageResize,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'|',
			'heading',
			'|',
			'fontSize',
			'fontColor',
			'fontBackgroundColor',
			'highlight',
			'|',
			'bold',
			'italic',
			'blockQuote',
			'underline',
			'link',
			'bulletedList',
			'numberedList',
			'code',
			'codeBlock',
			'todoList',
			'subscript',
			'superscript',
			'strikethrough',
			'|',
			'alignment',
			'outdent',
			'indent',
			'|',
			'uploadImage',
			'insertTable',
			'mediaEmbed',
			'|',
			'horizontalLine',
			'findAndReplace',
			'|',
		],
	},
	codeBlock: {
		languages: [
			{ language: 'python', label: 'Python' }, // The default language.
			{ language: 'sql', label: 'SQL' },
			{ language: 'plaintext', label: 'Plain text' },
			{ language: 'c', label: 'C' },
			{ language: 'cs', label: 'C#' },
			{ language: 'cpp', label: 'C++' },
			{ language: 'css', label: 'CSS' },
			{ language: 'diff', label: 'Diff' },
			{ language: 'html', label: 'HTML' },
			{ language: 'java', label: 'Java' },
			{ language: 'javascript', label: 'JavaScript' },
			{ language: 'php', label: 'PHP' },
			{ language: 'ruby', label: 'Ruby' },
			{ language: 'typescript', label: 'TypeScript' },
			{ language: 'xml', label: 'XML' },
		],
	},
	fontColor: {
		colors: [
			{
				color: '#111827',
				label: 'gray-900',
			},
			{
				color: '#374151',
				label: 'gray-700',
			},
			{
				color: '#4b5563',
				label: 'gray-600',
			},
			{
				color: '#6b7280',
				label: 'gray-500',
			},
			{
				color: '#9ca3af',
				label: 'gray-400',
			},
			{
				color: '#ffffff',
				label: 'white',
			},
			{
				color: '#005ecc',
				label: 'primary',
			},
			{
				color: '#1a83ff',
				label: 'primary-light',
			},
			{
				color: '#34A853',
				label: 'green',
			},
			{
				color: '#50C970',
				label: 'green-light',
			},
			{
				color: '#b91c1c',
				label: 'red',
			},
			{
				color: '#ef4444',
				label: 'red-light',
			},
			{
				color: '#d97706',
				label: 'orange',
			},
			{
				color: '#f59e0b',
				label: 'orange-light',
			},
			{
				color: '#7c3aed',
				label: 'violet',
			},
			{
				color: '#8b5cf6',
				label: 'violet-light',
			},
		],
	},
	fontBackgroundColor: {
		colors: [
			{
				color: '#005ECC',
				label: 'primary',
			},
			{
				color: '#DDF2FF',
				label: 'primary-light',
			},
			{
				color: '#34A853',
				label: 'green',
			},
			{
				color: '#E4FCE9',
				label: 'green-light',
			},
			{
				color: '#B91C1C',
				label: 'red',
			},
			{
				color: '#FEE2E2',
				label: 'red-light',
			},
			{
				color: '#B45309',
				label: 'orange',
			},
			{
				color: '#FEF3C7',
				label: 'orange-light',
			},
			{
				color: '#6D28D9',
				label: 'violet',
			},
			{
				color: '#EDE9FE',
				label: 'violet-light',
			},
			{
				color: '#111827',
				label: 'gray',
			},
			{
				color: '#F3F4F6',
				label: 'gray-light',
			},
		],
	},
	simpleUpload: {
		// feature configuration
	},
	mediaEmbed: {
		// feature configuration
	},
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative',
		],
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en',
};
