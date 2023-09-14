import { PanelConfig } from '@/panels/types';

export const imagePanelConfig: PanelConfig = {
  bindTool: ['imageTool'],
  bindShape: ['Image'],
  formConfig: [
    {
      name: 'stroke',
      label: '描边',
      type: 'ColorPicker',
    },
    {
      name: 'strokeWidth',
      label: '描边宽度',
      type: 'RadioGroup',
      optionType: 'icon',
      options: [
        {
          label: 'line-1',
          value: 2,
          title: '细',
        },
        {
          label: 'line-2',
          value: 4,
          title: '粗',
        },
        {
          label: 'line-3',
          value: 8,
          title: '特粗',
        },
      ],
    },
    {
      name: 'opacity',
      label: '透明度',
      type: 'Slider',
    },
  ],
  model: {
    stroke: '#ffffff00',
    strokeWidth: 2,
    opacity: 1,
  },
};

export default imagePanelConfig;
