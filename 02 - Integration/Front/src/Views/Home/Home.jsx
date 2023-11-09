import Cards from "../../components/Cards/Cards"

const Home = (props) => {
    const {characters, onClose} = props;
    
    return (
        <Cards characters={characters} onClose={onClose}/>
    )
}


export default Home;