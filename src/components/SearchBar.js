import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form} from 'react-bootstrap/';
import './YTstyle.css';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import React, { useContext } from "react";
import { Control } from './App';
import { Link } from 'react-router-dom';
const SearchBar = () => {
   const value = useContext(Control);
    return (
        <div className="search center">
            <Form>
                <Form.Control placeholder="Search" type='search' className='search-input' value={value.searchValue} onChange={value.handleChange} onKeyDown={value.handleEnter} required autoFocus />
                <Link to='/'>
                    <Button variant="light" className='btn-search' type='sumbit' onClick={(e)=>{value.handleSearch(e);} }>
                        <SearchIcon className='material-icons' />
                    </Button>
                </Link>
                <MicIcon className=' mic material-icons'/>
            </Form>
        </div>
      );
}

export default SearchBar;