import styled from 'styled-components'
import logo from '../../public/images/logo.svg'
import SearchInputField from './SearchInputField'
import Button from './Button'

export default function Header({ setQuery, setSelectedBtn }) {
    const filterOptions = ['All', 'Breakfast', 'Lunch', 'Dinner']
    return (
        <TopSection>
            <div className='top-header'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <SearchInputField setQuery={setQuery} />
            </div>
            <div className='filter'>
                {
                    filterOptions.map((option, i) => <Button setSelectedBtn={setSelectedBtn} key={i} label={option} />)
                }
            </div>
        </TopSection>
    )
}

const TopSection = styled.header`
    padding: 12px;
    
    .top-header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top: 40px;
    }

    .filter{
        display: flex;
        gap: 14px;
        justify-content: center;
        margin-top: 54px;
        margin-bottom: 31px;
    }

    @media (max-width: 600px) {
        .top-header{
            flex-direction: column;
            gap: 24px;
            padding-top: 24px;
        }

        .filter{
            margin-top: 24px;
        }
    }


`
