import App from './App';
import Article from './Article';
import { shallow, render } from 'enzyme';

test('rendering the entire app', () => {
  const component = render(<App />);

  expect(component).toMatchSnapshot();
});

it('should render 3 articles', () => {
  const component = shallow(<App />);
  const articles = component.find('Article');
  expect(articles).toHaveLength(3);
});

function circleArea(radius) {
  return 3.14 * radius * radius;
}

it('should return correct area', () => {
  expect(circleArea(4)).toEqual(50.24);
})