
const getPuppyPlayers = async ()=>{
    try{
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2402-ftb-mt-web-pt/players');
        const result = await response.json();
        return result.data.players;

    } catch(e){
        console.error('Error fetching players')
        console.error(e);
    }

};
export {
    getPuppyPlayers
}