import App from './App';
import { shallow } from 'enzyme';

describe('Tests for App.js', () =>{
  it('render app.js', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })
})