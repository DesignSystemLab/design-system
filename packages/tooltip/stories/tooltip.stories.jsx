import { Tooltip } from '../src';
import { Button } from '@jdesignlab/button';
import { ThemeContext, themePreset } from '@jdesignlab/j-provider';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  decorators: [Story => <Story />]
};

const argTypes = {
  button: {
    name: 'button'
  }
};

const Template = args => <Tooltip {...args} />;

export const TooltipBasic = () => (
  <ThemeContext.Provider value={themePreset}>
    <div
      style={{
        transform: 'translate(100px ,20px)',
        width: '500px',
        justifyItems: 'center',
        display: 'grid',
        gridTemplateColumns: 'repeat(5,1fr)',
        gridTemplateRows: 'repeat(5,1fr)',
        rowGap: '10px'
      }}
    >
      {/* <Tooltip>
        <Tooltip.Content>content</Tooltip.Content>
        <Tooltip.Target>Target</Tooltip.Target>
      </Tooltip> */}
      <div></div>

      <Tooltip placement="top-left">
        <Tooltip.Content>라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            top-left
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip placement="top">
        <Tooltip.Content background="pink-lighten3">라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            top
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip placement="top-right">
        <Tooltip.Content>라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            top-right
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <div></div>

      <Tooltip placement="left-top">
        <Tooltip.Content>
          <div style={{ width: '100px', height: '200px' }}>1234</div>
        </Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            left-top
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <div></div>
      <div></div>
      <div></div>

      <Tooltip placement="right-top">
        <Tooltip.Content>
          <div style={{ width: '100px', height: '200px' }}>1234</div>
        </Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            right-top
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip placement="left">
        <Tooltip.Content>라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            left
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <div></div>
      <div></div>
      <div></div>

      <Tooltip placement="right">
        <Tooltip.Content>
          <div style={{ width: '100px', height: '200px' }}>1234</div>
        </Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            right
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip placement="left-bottom">
        <Tooltip.Content>
          <div style={{ width: '100px', height: '200px' }}>1234</div>
        </Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            left-bottom
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <div></div>
      <div></div>
      <div></div>

      <Tooltip placement="right-bottom">
        <Tooltip.Content>라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            right-bottom
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <div></div>

      <Tooltip placement="bottom-left">
        <Tooltip.Content>라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            bottom-left
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip placement="bottom">
        <Tooltip.Content>라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            bottom
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip placement="bottom-right">
        <Tooltip.Content>라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            right-bottom
          </Button>
        </Tooltip.Target>
      </Tooltip>
    </div>

    <div
      style={{
        transform: 'translate(100px ,100px)',
        width: '500px',
        justifyItems: 'center',
        display: 'grid',
        gridTemplateColumns: 'repeat(5,1fr)',
        gridTemplateRows: 'repeat(5,1fr)',
        rowGap: '10px'
      }}
    >
      <div></div>
      <Tooltip placement="top-left">
        <Tooltip.Content>기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            top-left
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip placement="top">
        <Tooltip.Content background="pink-lighten3">기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            top
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip placement="top-right">
        <Tooltip.Content>기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            top-right
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <div></div>

      <Tooltip placement="left-top">
        <Tooltip.Content>기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            left-top
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <div></div>
      <div></div>
      <div></div>

      <Tooltip placement="right-top">
        <Tooltip.Content>기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            right-top
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip placement="left">
        <Tooltip.Content>기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            left
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <div></div>
      <div></div>
      <div></div>

      <Tooltip placement="right">
        <Tooltip.Content>기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            right
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip placement="left-bottom">
        <Tooltip.Content>기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            left-bottom
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <div></div>
      <div></div>
      <div></div>

      <Tooltip placement="right-bottom">
        <Tooltip.Content>기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            right-bottom
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <div></div>
      <Tooltip placement="bottom-left">
        <Tooltip.Content>기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            bottom-left
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip placement="bottom">
        <Tooltip.Content>기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            bottom
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip placement="bottom-right">
        <Tooltip.Content>기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            right-bottom
          </Button>
        </Tooltip.Target>
      </Tooltip>
      <div></div>
    </div>
  </ThemeContext.Provider>
);
