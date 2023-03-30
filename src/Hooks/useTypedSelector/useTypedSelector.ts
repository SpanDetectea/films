import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch