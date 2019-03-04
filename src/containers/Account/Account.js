import { connect } from 'react-redux'
import * as accountReducer from '../../reducers/Account'
import Account from '../../components/Account'

const mapStateToProps = (state) => ({
  account: accountReducer.selectCurrentAccount(state)
})

const { updateFormValue } = accountReducer

const mapDispatchToProps = {
  updateFormValue
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
