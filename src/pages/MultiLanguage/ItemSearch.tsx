import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React from "react";
import T from "../../apis/translate";

const ItemSearch = (
{
  searchKey,
  setSearchKey,
  setShowModal,
}:
{
  searchKey: any;
  setSearchKey: any;
  setShowModal: any;
}
) => {
  return (
    <div style={{marginBottom: 20, position:'relative'}}>
      <Input 
        prefix={<SearchOutlined style={{color: "#1890ff"}}/>}
        placeholder={T('multi_enterKey')} 
        style={{width: 400}} 
        allowClear={true}
        value={searchKey}
        onChange={(e: any)=>setSearchKey(e.target.value)}
      />
      <Button 
        type="primary" 
        style={{position:'absolute', right: '50px'}}
        onClick={() => setShowModal(true)}
      >{T('const_add')}</Button>
    </div>
    
  )
}

export default ItemSearch;