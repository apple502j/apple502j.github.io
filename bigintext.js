function castBigInt(v) {
  try {
    return BigInt(v) || 0n;
  } catch (e) {
    return 0n;
  }
}

function op(opcode, op) {
  return {
    opcode,
    text: `[A]n ${op} [B]n`,
    blockType: Scratch.BlockType.REPORTER,
    arguments: {
      A: {
        type: Scratch.ArgumentType.NUMBER,
        defaultValue: 100
      },
      B: {
        type: Scratch.ArgumentType.NUMBER,
        defaultValue: 2
      }
    }
  }
}

function wrap(cb) {
  return (args) => {
    return String(cb(castBigInt(args.A), castBigInt(args.B)));
  }
}

function wrapDiv(cb) {
  return (args) => {
    const b = castBigInt(args.B);
    if (b === 0n) return NaN;
    return String(cb(castBigInt(args.A), b));
  }
}

function wrapComp(cb) {
  return (args) => {
    return !!cb(castBigInt(args.A), castBigInt(args.B));
  }
}

class BigIntExtension {
  getInfo() {
    return {
      id: "bigint",
      name: "BigInt",
      blocks: [
        op("add", "+"),
        op("sub", "-"),
        op("mul", "*"),
        op("div", "/"),
        op("mod", "%"),
        op("pow", "**"),
        op("eq", "="),
        op("lt", "<"),
        op("gt", ">")
      ]
    };
  }
  
  add = wrap((a, b) => a + b)
  sub = wrap((a, b) => a - b)
  mul = wrap((a, b) => a * b)
  div = wrapDiv((a, b) => a / b)
  mod = wrapDiv((a, b) => a % b)
  pow = wrap((a, b) => a ** b)
  eq = wrapComp((a, b) => a === b)
  lt = wrapComp((a, b) => a < b)
  gt = wrapComp((a, b) => a > b)
}


Scratch.extensions.register(new BigIntExtension());