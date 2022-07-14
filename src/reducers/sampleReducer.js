const { 
    SAMPLE_DETAILS_REQUEST,
    SAMPLE_DETAILS_SUCCESS,
    SAMPLE_DETAILS_FAIL,
    SAMPLE_LIST_FAIL,
    SAMPLE_LIST_SUCCESS,
    SAMPLE_LIST_REQUEST    
 } = require('../constants/sampleConstant');

export const sampleDetailsReducer = (state = { sample:{}, loading: true}, action) =>{
    switch (action.type){
        case SAMPLE_DETAILS_REQUEST:
            return { loading: true };
        case SAMPLE_DETAILS_SUCCESS:
            return { loading: false, sample: action.payload };
        case SAMPLE_DETAILS_FAIL:
            return { loading: false, error: action.payload};
        default:
            return state;
    }
};

export const sampleListReducer = (
    state = { loading: true, samples: [] },
    action
  ) => {
    switch (action.type) {
      case SAMPLE_LIST_REQUEST:
        return { loading: true };
      case SAMPLE_LIST_SUCCESS:
        return {
          loading: false,
          samples: action.payload.samples,
        };
      case SAMPLE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  




