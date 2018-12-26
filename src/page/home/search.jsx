import React from 'react';
import { Input, Select } from 'antd';

const InputGroup = Input.Group;
const Option = Select.Option;

const getSearchUrl = type => `http://chou.foodmate.net/xz/${type}/index.html`;
const types = {
    category: 'category', // 按食品类别查询
    additive: 'additive', // 按检测项目查询
}
const SearchInput = Input.Search;

class Search extends React.PureComponent {
    state = {
        type: types.category,
    }
    handleSearch = (value) => {
        const { type } = this.state;
        window.open(`${getSearchUrl(type)}?q=${value}`);
    }
    handleTypeChange = (value) => {
        this.setState({ type: value });
    }
    render() {
        const { className } = this.props;
        return (
            <div style={{ float: 'right', height: 75 }}>
                <InputGroup className={className} compact>
                    <Select defaultValue={types.category} onChange={this.handleTypeChange}>
                        <Option value={types.category}>按食品类型查询</Option>
                        <Option value={types.additive}>按检测项目查询</Option>
                    </Select>
                    <SearchInput className={'home-search-input'} placeholder='请输入搜索内容' onSearch={this.handleSearch} />
                </InputGroup>
            </div>
        );
    }
}

export default Search;
