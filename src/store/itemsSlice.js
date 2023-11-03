import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {items:[]},
  reducers: {
    add(state, action) {
      //pseudo code 
      // 1) 선택한 아이템을 호출한다. -> playload로 가져오기
      // 2) items 배열의 item과 비교해서 동일 항목의 존재 여부를 확인한다. -> find();
      // 3 - 1) 있을 경우(true) count + 1 -> ++
      // 3-2) 없을 경우 items 배열에 추가하기. -> push
    }, remove(state, action) { 
      //pseudo code 
      // 1) 선택한 item을 호출한다. -> playload로 가져오기 (id만으로 가능) !! 빼기는 카트에서만 가능
      // 2) 선택된 items의 item의 count를 확인.
      // 3 - 1) item의 count가 = 1 이면 items에서 삭제 filter(!selectedItem);
      // 3 - 2) item의 count가 > 1 이면 coun t -1
    }
  }
})

export const itemsActions = itemsSlice.actions;
export default itemsSlice.reducer;