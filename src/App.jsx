import './App.css';
import SplitScreen from './SplitScreen';

export const LeftSideScreen = ( { name } ) => {

  return <h1>{ name ? name : <h1>Hi there Left</h1> }</h1>;

};

export const RightSideScreen = ( { message } ) => {

  return <h1>{ message ? message : <h1>Hi there Right</h1> }</h1>;
};

function App () {
  return (
    <>
      <SplitScreen
        leftWeigh={ 2 }
        rightWeigh={ 1 }>

        <LeftSideScreen
          name="Valeria"
        />

        <RightSideScreen
          message={ "Hi I'm Valeria!" }
        />

      </SplitScreen>
    </>
  );
}

export default App;
