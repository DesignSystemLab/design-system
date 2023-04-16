import { Tooltip } from '../src';
import { Button } from '@jdesignlab/button';

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
  <>
    <div
      style={{
        transform: 'translate(100px ,20px)',
        width: '500px',
        justifyItems: 'center',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gridTemplateRows: 'repeat(3,1fr)',
        rowGap: '10px'
      }}
    >
      <Tooltip>
        <Tooltip.Content on="top-left">라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            top-left
          </Button>
        </Tooltip.Target>
      </Tooltip>
      <Tooltip>
        <Tooltip.Content on="top" background="pink-lighten3">
          라벨입니다
        </Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            top
          </Button>
        </Tooltip.Target>
      </Tooltip>
      <Tooltip>
        <Tooltip.Content on="top-right">라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            top-right
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip>
        <Tooltip.Content on="left-top">라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            left-top
          </Button>
        </Tooltip.Target>
      </Tooltip>
      <Tooltip></Tooltip>
      <Tooltip>
        <Tooltip.Content on="right-top">라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            right-top
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip>
        <Tooltip.Content on="left">라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            left
          </Button>
        </Tooltip.Target>
      </Tooltip>
      <Tooltip></Tooltip>
      <Tooltip>
        <Tooltip.Content on="right">라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            right
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip>
        <Tooltip.Content on="left-bottom">라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            left-bottom
          </Button>
        </Tooltip.Target>
      </Tooltip>
      <Tooltip></Tooltip>
      <Tooltip>
        <Tooltip.Content on="right-bottom">라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            right-bottom
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip>
        <Tooltip.Content on="bottom-left">라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            bottom-left
          </Button>
        </Tooltip.Target>
      </Tooltip>
      <Tooltip>
        <Tooltip.Content on="bottom">라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="lg" color="teal-base">
            bottom
          </Button>
        </Tooltip.Target>
      </Tooltip>
      <Tooltip>
        <Tooltip.Content on="bottom-right">라벨입니다</Tooltip.Content>
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
        gridTemplateColumns: 'repeat(3,1fr)',
        gridTemplateRows: 'repeat(3,1fr)',
        rowGap: '10px'
      }}
    >
      <Tooltip>
        <Tooltip.Content on="top-left">기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            top-left
          </Button>
        </Tooltip.Target>
      </Tooltip>
      <Tooltip>
        <Tooltip.Content on="top" background="pink-lighten3">
          기이이이이이이이이이이인 라벨입니다
        </Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            top
          </Button>
        </Tooltip.Target>
      </Tooltip>
      <Tooltip>
        <Tooltip.Content on="top-right">기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            top-right
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip>
        <Tooltip.Content on="left-top">기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            left-top
          </Button>
        </Tooltip.Target>
      </Tooltip>
      <Tooltip></Tooltip>
      <Tooltip>
        <Tooltip.Content on="right-top">기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            right-top
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip>
        <Tooltip.Content on="left">기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            left
          </Button>
        </Tooltip.Target>
      </Tooltip>
      <Tooltip></Tooltip>
      <Tooltip>
        <Tooltip.Content on="right">기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            right
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip>
        <Tooltip.Content on="left-bottom">기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            left-bottom
          </Button>
        </Tooltip.Target>
      </Tooltip>
      <Tooltip></Tooltip>
      <Tooltip>
        <Tooltip.Content on="right-bottom">기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            right-bottom
          </Button>
        </Tooltip.Target>
      </Tooltip>

      <Tooltip>
        <Tooltip.Content on="bottom-left">기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            bottom-left
          </Button>
        </Tooltip.Target>
      </Tooltip>
      <Tooltip>
        <Tooltip.Content on="bottom">기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            bottom
          </Button>
        </Tooltip.Target>
      </Tooltip>
      <Tooltip>
        <Tooltip.Content on="bottom-right">기이이이이이이이이이이인 라벨입니다</Tooltip.Content>
        <Tooltip.Target>
          <Button variant="outline" size="xl">
            right-bottom
          </Button>
        </Tooltip.Target>
      </Tooltip>
    </div>
  </>
);
