import Stack from '../Stack'
import ArrayStack from '../ArrayStack'
import ResizingArrayStack from '../ResizingArrayStack'

import { commonStackTest } from './common'

commonStackTest('Stack', Stack)
commonStackTest('Stack', ArrayStack)
commonStackTest('ResizingArrayStack', ResizingArrayStack)
