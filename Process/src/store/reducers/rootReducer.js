const initState = {
    users: [
        {id: 1, name: 'Thomas'},
        {id: 2, name: 'Houston'},
    ] 
}

const rootReducer = (state = initState, action) => {



    return state;
}

/*
    state: Trạng thái của ứng dụng, trạng thái của Redux, nơi lưu trữ data của Redux.
    action: Sự kiện, action được truyền từ React App lên Redux.
    state = initState: Vừa khởi tạo thì biến state đã có giá trị của initState.
*/

export default rootReducer;