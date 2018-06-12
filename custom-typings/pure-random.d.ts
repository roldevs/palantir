declare module 'pure-random' {
  // genSeed
  // :: () -> [Uint32]
  export function genSeed(): any;

  // genCsSeed
  // :: () -> [Uint32]
  export function genCsSeed(): any;

  // randUint
  // :: [UInt32] -> UInt32
  export function randUint(UInt32: any): any;

  // randFloat
  // :: [UInt32] -> Int -> Int -> Either Error Float
  export function randFloat(UInt32: any): any;

  // random
  // :: [UInt32] -> Int -> Int -> Either Error Int
  export function random(UInt32: any): any;
}
