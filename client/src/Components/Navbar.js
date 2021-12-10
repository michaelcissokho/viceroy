import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Link, useHistory } from 'react-router-dom'
import { mobile } from '../responsive'

const Container = styled.div`
    height:60px;
    ${mobile({ height: '55px' })}
`

const Wrapper = styled.div`
    padding:10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: '10px 0px' })}
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;

const Language = styled.div`
    font-size:14px;
    cursor: pointer;
    ${mobile({ display: 'none' })}

`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ marginLeft: '10px' })}
`;

const Input = styled.input`
    border:none;
    ${mobile({ width: '55px' })}

`;
const Center = styled.div`
    flex:1;
    text-align:center;
`;

const Logo = styled.h1`
    font-weight:bold;
    cursor:pointer;
    ${mobile({ marginLeft: "10px", fontSize: '24px' })}
`;

const Right = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content:flex-end;
    ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({ fontSize: '12px', marginLeft: '7px' })}
`

const Navbar = ({ logout }) => {
    let history = useHistory()

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo onClick={() => history.push('/')}>VICEROY.</Logo>
                </Center>
                <Right>
                    {!localStorage.getItem('id') && <MenuItem as={Link} to="/register">REGISTER</MenuItem>}
                    {!localStorage.getItem('id') && <MenuItem as={Link} to="/login">SIGN IN</MenuItem>}
                    <Link to='/cart'>
                        <MenuItem>
                            <ShoppingCartOutlined onClick={() => history.push}/>
                        </MenuItem>
                    </Link>
                    {localStorage.getItem('id') && <MenuItem onClick={()=> history.push(`/users/${localStorage.getItem('id')}`)}>Your Account</MenuItem>}
                    {localStorage.getItem('id') && <MenuItem>{`current user: ${localStorage.getItem('username')}`}</MenuItem>}
                    {localStorage.getItem('id') && <MenuItem onClick={logout}>Logout</MenuItem>}
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;