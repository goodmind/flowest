type N1 = 0
type N2 = 2314234
type N3 = number
type S1 = "a"
type S2 = 'str'
type S3 = string
type B1 = true
type B2 = false
type B3 = boolean
type Null1 = null
type Void1 = void
type Maybe1 = (number | null | undefined)
type Maybe2 = ((string | null | undefined) | null | undefined)
type Maybe3 = ((string | null | undefined) | (number | null | undefined))
type Union1 = (string | 0 | 1 | 2 | 3)
type Union2 = ((0 | 1 | (2 | 3)) | 4 | (5 | 6) | 7)
type Intersection1 = (string & 0 & 1 & 2 & 3)
type Intersection2 = ((0 & 1 & (2 & 3)) & 4 & (5 & 6) & 7)
type Typeof1 = typeof T
type Tuple1 = []
type Tuple2 = [1, 2, 3]
type Tuple3 = [2, Array<string>, (number)[], [3, [4, 5]], [6, 7]]
type Exists1 = any
declare type DT1 = string