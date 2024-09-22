import React,{useState} from 'react';

function Survey()
{
  const [catVotes, setCatVotes] = useState(0);
  const [dogVotes, setDogVotes] = useState(0);

  const handleCatVote = () =>{
    setCatVotes(catVotes +1);
  }

  const handleDogVote = () =>{
    setDogVotes(dogVotes+1);
  }
  
  const getButtonClass = (animal) => {
    if(catVotes > dogVotes){
      return animal === 'cat' ? 'highest-vote' : 'lowest-vote';
    }else if(dogVotes > catVotes){
      return animal === 'dog' ? 'highest-vote' : 'lowest-vote';
    }else{
      return 'same-vote';
    }
  }

  return(
    <div className='container'>
      <h1>Do you like cats or dogs?</h1>
      <div className='button-container'>
        <button onClick={handleCatVote} className={`vote-button ${getButtonClass('cat')}`}>I like Cats</button>
        <button onClick={handleDogVote} className={`vote-button ${getButtonClass('dog')}`}>I like Dogs</button>
      </div>
      <div className='results'>
        <h2>Votes:</h2>
        <p>Cats: {catVotes}</p>
        <p>Dogs: {dogVotes}</p>
      </div>

    </div>
  )
}



export default Survey;