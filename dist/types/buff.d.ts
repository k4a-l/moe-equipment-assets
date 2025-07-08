import z from "zod";
declare const statusUpBuffSchema: z.ZodObject<{
    type: z.ZodLiteral<"statusUp">;
    subject: z.ZodUnion<readonly [z.ZodLiteral<"攻撃力">, z.ZodLiteral<"命中">, z.ZodLiteral<"物理与ダメージ">, z.ZodLiteral<"魔法与ダメージ">, z.ZodLiteral<"魔法ディレイ">, z.ZodLiteral<"クリティカル率">, z.ZodLiteral<"魔力">, z.ZodLiteral<"スペル短縮">, z.ZodLiteral<"攻撃ディレイ">, z.ZodLiteral<"最大HP">, z.ZodLiteral<"最大MP">, z.ZodLiteral<"最大ST">, z.ZodLiteral<"防御力">, z.ZodLiteral<"回避">, z.ZodLiteral<"素手">, z.ZodLiteral<"刀剣">, z.ZodLiteral<"こんぼう">, z.ZodLiteral<"槍">, z.ZodLiteral<"銃器">, z.ZodLiteral<"弓">, z.ZodLiteral<"盾">, z.ZodLiteral<"投げ">, z.ZodLiteral<"牙">, z.ZodLiteral<"罠">, z.ZodLiteral<"キック">, z.ZodLiteral<"戦闘技術">, z.ZodLiteral<"酩酊">, z.ZodLiteral<"物まね">, z.ZodLiteral<"調教">, z.ZodLiteral<"破壊">, z.ZodLiteral<"回復">, z.ZodLiteral<"神秘">, z.ZodLiteral<"召喚">, z.ZodLiteral<"強化">, z.ZodLiteral<"死魔">, z.ZodLiteral<"魔法熟練">, z.ZodLiteral<"自然調和">, z.ZodLiteral<"暗黒命令">, z.ZodLiteral<"取引">, z.ZodLiteral<"シャウト">, z.ZodLiteral<"音楽">, z.ZodLiteral<"盗み">, z.ZodLiteral<"ギャンブル">, z.ZodLiteral<"パフォーマンス">, z.ZodLiteral<"ダンス">, ...(z.ZodLiteral<"落下耐性"> | z.ZodLiteral<"水泳"> | z.ZodLiteral<"死体回収"> | z.ZodLiteral<"包帯"> | z.ZodLiteral<"自然回復"> | z.ZodLiteral<"採掘"> | z.ZodLiteral<"伐採"> | z.ZodLiteral<"収穫"> | z.ZodLiteral<"釣り"> | z.ZodLiteral<"解読"> | z.ZodLiteral<"耐火属性"> | z.ZodLiteral<"耐水属性"> | z.ZodLiteral<"耐地属性"> | z.ZodLiteral<"耐風属性"> | z.ZodLiteral<"耐無属性"> | z.ZodLiteral<"料理ゲージ滑り" | "料理ゲージ速度" | "料理ヒットゾーン" | "料理グレードゾーン" | "料理マスターグレードゾーン" | "鍛冶ゲージ滑り" | "鍛冶ゲージ速度" | "鍛冶ヒットゾーン" | "鍛冶グレードゾーン" | "鍛冶マスターグレードゾーン" | "醸造ゲージ滑り" | "醸造ゲージ速度" | "醸造ヒットゾーン" | "醸造グレードゾーン" | "醸造マスターグレードゾーン" | "大工ゲージ滑り" | "大工ゲージ速度" | "大工ヒットゾーン" | "大工グレードゾーン" | "大工マスターグレードゾーン" | "裁縫ゲージ滑り" | "裁縫ゲージ速度" | "裁縫ヒットゾーン" | "裁縫グレードゾーン" | "裁縫マスターグレードゾーン" | "薬調合ゲージ滑り" | "薬調合ゲージ速度" | "薬調合ヒットゾーン" | "薬調合グレードゾーン" | "薬調合マスターグレードゾーン" | "装飾細工ゲージ滑り" | "装飾細工ゲージ速度" | "装飾細工ヒットゾーン" | "装飾細工グレードゾーン" | "装飾細工マスターグレードゾーン" | "複製ゲージ滑り" | "複製ゲージ速度" | "複製ヒットゾーン" | "複製グレードゾーン" | "複製マスターグレードゾーン" | "栽培ゲージ滑り" | "栽培ゲージ速度" | "栽培ヒットゾーン" | "栽培グレードゾーン" | "栽培マスターグレードゾーン" | "美容ゲージ滑り" | "美容ゲージ速度" | "美容ヒットゾーン" | "美容グレードゾーン" | "美容マスターグレードゾーン"> | z.ZodLiteral<"ペット経験値"> | z.ZodLiteral<"火属性効果"> | z.ZodLiteral<"水属性効果"> | z.ZodLiteral<"土属性効果"> | z.ZodLiteral<"風属性効果"> | z.ZodLiteral<"無属性効果"> | z.ZodLiteral<"HP自然回復"> | z.ZodLiteral<"ST自然回復"> | z.ZodLiteral<"MP自然回復"> | z.ZodLiteral<"移動速度"> | z.ZodLiteral<"水中速度"> | z.ZodLiteral<"耐全属性"> | z.ZodLiteral<"SEEING"> | z.ZodLiteral<"HEARING"> | z.ZodLiteral<"SMELLING"> | z.ZodLiteral<"最大重量"> | z.ZodLiteral<"所持重量"> | z.ZodLiteral<"ジャンプ力"> | z.ZodLiteral<"落下速度"> | z.ZodLiteral<"落下ダメージ"> | z.ZodLiteral<"BREATH">)[], z.ZodLiteral<"キック命中率補正">, z.ZodLiteral<"キック攻撃力補正">, z.ZodLiteral<"釣りゲージ速度">, z.ZodLiteral<"釣りヒットゾーン">, z.ZodLiteral<"釣りゲージ長">, z.ZodLiteral<"泳ぎ速度">, z.ZodLiteral<"牙命中率補正">, z.ZodLiteral<"牙攻撃補正">, z.ZodLiteral<"栽培ゲージ速度">, z.ZodLiteral<"盗み補正">, z.ZodLiteral<"潤喉度">, z.ZodLiteral<"満腹度">, z.ZodLiteral<"ピッキング失敗回数補正">, z.ZodLiteral<"ピッキング回転速度補正">, z.ZodLiteral<"攻撃範囲増加">, z.ZodLiteral<"詠唱継続率">, z.ZodLiteral<"伐採命中">, z.ZodLiteral<"サイズ">]>;
    value: z.ZodUnion<[z.ZodNumber, z.ZodLiteral<"未検証">]>;
    group: z.ZodOptional<z.ZodString>;
    numberType: z.ZodOptional<z.ZodEnum<["percent"]>>;
}, "strip", z.ZodTypeAny, {
    value: number | "未検証";
    type: "statusUp";
    subject: "素手" | "刀剣" | "こんぼう" | "槍" | "銃器" | "弓" | "盾" | "投げ" | "牙" | "罠" | "キック" | "戦闘技術" | "酩酊" | "物まね" | "調教" | "破壊" | "回復" | "神秘" | "召喚" | "強化" | "死魔" | "魔法熟練" | "自然調和" | "暗黒命令" | "取引" | "シャウト" | "音楽" | "盗み" | "ギャンブル" | "パフォーマンス" | "ダンス" | "落下耐性" | "水泳" | "死体回収" | "包帯" | "自然回復" | "採掘" | "伐採" | "収穫" | "釣り" | "解読" | "耐火属性" | "耐水属性" | "耐地属性" | "耐風属性" | "耐無属性" | "料理ゲージ滑り" | "料理ゲージ速度" | "料理ヒットゾーン" | "料理グレードゾーン" | "料理マスターグレードゾーン" | "鍛冶ゲージ滑り" | "鍛冶ゲージ速度" | "鍛冶ヒットゾーン" | "鍛冶グレードゾーン" | "鍛冶マスターグレードゾーン" | "醸造ゲージ滑り" | "醸造ゲージ速度" | "醸造ヒットゾーン" | "醸造グレードゾーン" | "醸造マスターグレードゾーン" | "大工ゲージ滑り" | "大工ゲージ速度" | "大工ヒットゾーン" | "大工グレードゾーン" | "大工マスターグレードゾーン" | "裁縫ゲージ滑り" | "裁縫ゲージ速度" | "裁縫ヒットゾーン" | "裁縫グレードゾーン" | "裁縫マスターグレードゾーン" | "薬調合ゲージ滑り" | "薬調合ゲージ速度" | "薬調合ヒットゾーン" | "薬調合グレードゾーン" | "薬調合マスターグレードゾーン" | "装飾細工ゲージ滑り" | "装飾細工ゲージ速度" | "装飾細工ヒットゾーン" | "装飾細工グレードゾーン" | "装飾細工マスターグレードゾーン" | "複製ゲージ滑り" | "複製ゲージ速度" | "複製ヒットゾーン" | "複製グレードゾーン" | "複製マスターグレードゾーン" | "栽培ゲージ滑り" | "栽培ゲージ速度" | "栽培ヒットゾーン" | "栽培グレードゾーン" | "栽培マスターグレードゾーン" | "美容ゲージ滑り" | "美容ゲージ速度" | "美容ヒットゾーン" | "美容グレードゾーン" | "美容マスターグレードゾーン" | "攻撃力" | "命中" | "物理与ダメージ" | "魔法与ダメージ" | "魔法ディレイ" | "クリティカル率" | "魔力" | "スペル短縮" | "攻撃ディレイ" | "最大HP" | "最大MP" | "最大ST" | "防御力" | "回避" | "ペット経験値" | "火属性効果" | "水属性効果" | "土属性効果" | "風属性効果" | "無属性効果" | "HP自然回復" | "ST自然回復" | "MP自然回復" | "移動速度" | "水中速度" | "耐全属性" | "SEEING" | "HEARING" | "SMELLING" | "最大重量" | "所持重量" | "ジャンプ力" | "落下速度" | "落下ダメージ" | "BREATH" | "キック命中率補正" | "キック攻撃力補正" | "釣りゲージ速度" | "釣りヒットゾーン" | "釣りゲージ長" | "泳ぎ速度" | "牙命中率補正" | "牙攻撃補正" | "盗み補正" | "潤喉度" | "満腹度" | "ピッキング失敗回数補正" | "ピッキング回転速度補正" | "攻撃範囲増加" | "詠唱継続率" | "伐採命中" | "サイズ";
    numberType?: "percent" | undefined;
    group?: string | undefined;
}, {
    value: number | "未検証";
    type: "statusUp";
    subject: "素手" | "刀剣" | "こんぼう" | "槍" | "銃器" | "弓" | "盾" | "投げ" | "牙" | "罠" | "キック" | "戦闘技術" | "酩酊" | "物まね" | "調教" | "破壊" | "回復" | "神秘" | "召喚" | "強化" | "死魔" | "魔法熟練" | "自然調和" | "暗黒命令" | "取引" | "シャウト" | "音楽" | "盗み" | "ギャンブル" | "パフォーマンス" | "ダンス" | "落下耐性" | "水泳" | "死体回収" | "包帯" | "自然回復" | "採掘" | "伐採" | "収穫" | "釣り" | "解読" | "耐火属性" | "耐水属性" | "耐地属性" | "耐風属性" | "耐無属性" | "料理ゲージ滑り" | "料理ゲージ速度" | "料理ヒットゾーン" | "料理グレードゾーン" | "料理マスターグレードゾーン" | "鍛冶ゲージ滑り" | "鍛冶ゲージ速度" | "鍛冶ヒットゾーン" | "鍛冶グレードゾーン" | "鍛冶マスターグレードゾーン" | "醸造ゲージ滑り" | "醸造ゲージ速度" | "醸造ヒットゾーン" | "醸造グレードゾーン" | "醸造マスターグレードゾーン" | "大工ゲージ滑り" | "大工ゲージ速度" | "大工ヒットゾーン" | "大工グレードゾーン" | "大工マスターグレードゾーン" | "裁縫ゲージ滑り" | "裁縫ゲージ速度" | "裁縫ヒットゾーン" | "裁縫グレードゾーン" | "裁縫マスターグレードゾーン" | "薬調合ゲージ滑り" | "薬調合ゲージ速度" | "薬調合ヒットゾーン" | "薬調合グレードゾーン" | "薬調合マスターグレードゾーン" | "装飾細工ゲージ滑り" | "装飾細工ゲージ速度" | "装飾細工ヒットゾーン" | "装飾細工グレードゾーン" | "装飾細工マスターグレードゾーン" | "複製ゲージ滑り" | "複製ゲージ速度" | "複製ヒットゾーン" | "複製グレードゾーン" | "複製マスターグレードゾーン" | "栽培ゲージ滑り" | "栽培ゲージ速度" | "栽培ヒットゾーン" | "栽培グレードゾーン" | "栽培マスターグレードゾーン" | "美容ゲージ滑り" | "美容ゲージ速度" | "美容ヒットゾーン" | "美容グレードゾーン" | "美容マスターグレードゾーン" | "攻撃力" | "命中" | "物理与ダメージ" | "魔法与ダメージ" | "魔法ディレイ" | "クリティカル率" | "魔力" | "スペル短縮" | "攻撃ディレイ" | "最大HP" | "最大MP" | "最大ST" | "防御力" | "回避" | "ペット経験値" | "火属性効果" | "水属性効果" | "土属性効果" | "風属性効果" | "無属性効果" | "HP自然回復" | "ST自然回復" | "MP自然回復" | "移動速度" | "水中速度" | "耐全属性" | "SEEING" | "HEARING" | "SMELLING" | "最大重量" | "所持重量" | "ジャンプ力" | "落下速度" | "落下ダメージ" | "BREATH" | "キック命中率補正" | "キック攻撃力補正" | "釣りゲージ速度" | "釣りヒットゾーン" | "釣りゲージ長" | "泳ぎ速度" | "牙命中率補正" | "牙攻撃補正" | "盗み補正" | "潤喉度" | "満腹度" | "ピッキング失敗回数補正" | "ピッキング回転速度補正" | "攻撃範囲増加" | "詠唱継続率" | "伐採命中" | "サイズ";
    numberType?: "percent" | undefined;
    group?: string | undefined;
}>;
/**
 * ここで言う乗算は元ダメージへの乗算ではなく、バフ同士を加算するか乗算するかということ
 * - (元ダメージ)×（バフ1+バフ2）=最終ダメージなら加算
 * 対象によって計算方法固定されている？
 * - 例えばジャンプ力は全て乗算、攻撃力は全て加算など
 * - 攻撃力だけどこれだけは全体に乗算みたいなものはない？
 * - あった場合はそれを例外とすればいいのでは？
 * - 1個だけのために他100個にmethod:"add"を書くのは馬鹿のやることか
 * いや、違う 攻撃力増加バフでも+10系と+10%系があるので分けないといけない
 * それはそれで分ければいいだけな気がする？
 * subjectの名前ごとわけじゃったほうがいい？でもそれだと計算が面倒か
 * 実数と％にわけるとして、ディレイカットは実数なのか%なのか
 * 値が実数なのか係数なのかでわけられそう？
 * ゲーム内に単体の値として存在するか否かとか
 * - ディレイ：-43など実数として表される
 * - 攻撃力、ST、MPなど：ゲーム内でも実数 %のときは明記する
 * - 予ダメージアップ：係数
 * - 属性効果：予ダメージと同様
 * - スキル系：実数（今後割合が出てくるかもしれないが）
 * 係数しか存在しないものは「率」とつけちゃうのが安全かもしれない（ちょっと不自然でも）
 *  %は全部乗算か？
 * - 攻撃力%、ペット経験値（率）
 *   - ペット経験値は経験値が50という実数があり、それに対する%
 *   - exp粉のように実数+アイテムもあるので、その考えは正しい
 * - 予ダメージ率は倍率だけど「予ダメージ倍率」という数値
 */
export declare const STATUS_UP_CALC_METHODS: {
    攻撃力: "add";
    命中: "add";
    物理与ダメージ: "add";
    魔法与ダメージ: "add";
    魔法ディレイ: "add";
    クリティカル率: "add";
    魔力: "add";
    攻撃ディレイ: "add";
    最大HP: "add";
    最大MP: "add";
    最大ST: "add";
    防御力: "add";
    回避: "add";
    ペット経験値: "multiply";
    火属性効果: "add";
    水属性効果: "add";
    土属性効果: "add";
    風属性効果: "add";
    無属性効果: "add";
    HP自然回復: "add";
    ST自然回復: "add";
    MP自然回復: "add";
    移動速度: "add";
    水中速度: "add";
    耐全属性: "add";
    耐火属性: "add";
    耐水属性: "add";
    耐地属性: "add";
    耐風属性: "add";
    耐無属性: "add";
    SEEING: "add";
    HEARING: "add";
    SMELLING: "add";
    最大重量: "add";
    所持重量: "multiply";
    ジャンプ力: "add";
    BREATH: "add";
    料理ゲージ滑り: "add";
    料理ゲージ速度: "add";
    料理ヒットゾーン: "add";
    料理グレードゾーン: "add";
    料理マスターグレードゾーン: "add";
    鍛冶ゲージ滑り: "add";
    鍛冶ゲージ速度: "add";
    鍛冶ヒットゾーン: "add";
    鍛冶グレードゾーン: "add";
    鍛冶マスターグレードゾーン: "add";
    醸造ゲージ滑り: "add";
    醸造ゲージ速度: "add";
    醸造ヒットゾーン: "add";
    醸造グレードゾーン: "add";
    醸造マスターグレードゾーン: "add";
    大工ゲージ滑り: "add";
    大工ゲージ速度: "add";
    大工ヒットゾーン: "add";
    大工グレードゾーン: "add";
    大工マスターグレードゾーン: "add";
    裁縫ゲージ滑り: "add";
    裁縫ゲージ速度: "add";
    裁縫ヒットゾーン: "add";
    裁縫グレードゾーン: "add";
    裁縫マスターグレードゾーン: "add";
    薬調合ゲージ滑り: "add";
    薬調合ゲージ速度: "add";
    薬調合ヒットゾーン: "add";
    薬調合グレードゾーン: "add";
    薬調合マスターグレードゾーン: "add";
    装飾細工ゲージ滑り: "add";
    装飾細工ゲージ速度: "add";
    装飾細工ヒットゾーン: "add";
    装飾細工グレードゾーン: "add";
    装飾細工マスターグレードゾーン: "add";
    複製ゲージ滑り: "add";
    複製ゲージ速度: "add";
    複製ヒットゾーン: "add";
    複製グレードゾーン: "add";
    複製マスターグレードゾーン: "add";
    栽培ゲージ滑り: "add";
    栽培ゲージ速度: "add";
    栽培ヒットゾーン: "add";
    栽培グレードゾーン: "add";
    栽培マスターグレードゾーン: "add";
    美容ゲージ滑り: "add";
    美容ゲージ速度: "add";
    美容ヒットゾーン: "add";
    美容グレードゾーン: "add";
    美容マスターグレードゾーン: "add";
    キック命中率補正: "add";
    キック攻撃力補正: "add";
    釣りゲージ速度: "add";
    釣りヒットゾーン: "add";
    釣りゲージ長: "add";
    泳ぎ速度: "add";
    牙命中率補正: "add";
    牙攻撃補正: "add";
    盗み補正: "add";
    潤喉度: "add";
    満腹度: "add";
    ピッキング失敗回数補正: "add";
    ピッキング回転速度補正: "add";
    攻撃範囲増加: "add";
    スペル短縮: "add";
    詠唱継続率: "add";
    伐採命中: "add";
    サイズ: "individual";
    落下ダメージ: "add";
    落下速度: "add";
    素手: "add" | "multiply" | "individual";
    刀剣: "add" | "multiply" | "individual";
    こんぼう: "add" | "multiply" | "individual";
    槍: "add" | "multiply" | "individual";
    銃器: "add" | "multiply" | "individual";
    弓: "add" | "multiply" | "individual";
    盾: "add" | "multiply" | "individual";
    投げ: "add" | "multiply" | "individual";
    牙: "add" | "multiply" | "individual";
    罠: "add" | "multiply" | "individual";
    キック: "add" | "multiply" | "individual";
    戦闘技術: "add" | "multiply" | "individual";
    酩酊: "add" | "multiply" | "individual";
    物まね: "add" | "multiply" | "individual";
    調教: "add" | "multiply" | "individual";
    破壊: "add" | "multiply" | "individual";
    回復: "add" | "multiply" | "individual";
    神秘: "add" | "multiply" | "individual";
    召喚: "add" | "multiply" | "individual";
    強化: "add" | "multiply" | "individual";
    死魔: "add" | "multiply" | "individual";
    魔法熟練: "add" | "multiply" | "individual";
    自然調和: "add" | "multiply" | "individual";
    暗黒命令: "add" | "multiply" | "individual";
    取引: "add" | "multiply" | "individual";
    シャウト: "add" | "multiply" | "individual";
    音楽: "add" | "multiply" | "individual";
    盗み: "add" | "multiply" | "individual";
    ギャンブル: "add" | "multiply" | "individual";
    パフォーマンス: "add" | "multiply" | "individual";
    ダンス: "add" | "multiply" | "individual";
    落下耐性: "add" | "multiply" | "individual";
    水泳: "add" | "multiply" | "individual";
    死体回収: "add" | "multiply" | "individual";
    包帯: "add" | "multiply" | "individual";
    自然回復: "add" | "multiply" | "individual";
    採掘: "add" | "multiply" | "individual";
    伐採: "add" | "multiply" | "individual";
    収穫: "add" | "multiply" | "individual";
    釣り: "add" | "multiply" | "individual";
    解読: "add" | "multiply" | "individual";
};
export type StatusUpBuff = z.infer<typeof statusUpBuffSchema>;
declare const otherBuffSchema: z.ZodObject<{
    type: z.ZodLiteral<"others">;
    subject: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "others";
    subject: string;
}, {
    type: "others";
    subject: string;
}>;
export type OtherBuff = z.infer<typeof otherBuffSchema>;
export declare const buffSchema: z.ZodUnion<[z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    unedited: z.ZodLiteral<true>;
    effects: z.ZodOptional<z.ZodArray<z.ZodNever, "many">>;
}, "strip", z.ZodTypeAny, {
    description: string;
    name: string;
    unedited: true;
    effects?: never[] | undefined;
}, {
    description: string;
    name: string;
    unedited: true;
    effects?: never[] | undefined;
}>, z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    unedited: z.ZodOptional<z.ZodLiteral<false>>;
    noBuffSlot: z.ZodOptional<z.ZodBoolean>;
    effects: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"statusUp">;
        subject: z.ZodUnion<readonly [z.ZodLiteral<"攻撃力">, z.ZodLiteral<"命中">, z.ZodLiteral<"物理与ダメージ">, z.ZodLiteral<"魔法与ダメージ">, z.ZodLiteral<"魔法ディレイ">, z.ZodLiteral<"クリティカル率">, z.ZodLiteral<"魔力">, z.ZodLiteral<"スペル短縮">, z.ZodLiteral<"攻撃ディレイ">, z.ZodLiteral<"最大HP">, z.ZodLiteral<"最大MP">, z.ZodLiteral<"最大ST">, z.ZodLiteral<"防御力">, z.ZodLiteral<"回避">, z.ZodLiteral<"素手">, z.ZodLiteral<"刀剣">, z.ZodLiteral<"こんぼう">, z.ZodLiteral<"槍">, z.ZodLiteral<"銃器">, z.ZodLiteral<"弓">, z.ZodLiteral<"盾">, z.ZodLiteral<"投げ">, z.ZodLiteral<"牙">, z.ZodLiteral<"罠">, z.ZodLiteral<"キック">, z.ZodLiteral<"戦闘技術">, z.ZodLiteral<"酩酊">, z.ZodLiteral<"物まね">, z.ZodLiteral<"調教">, z.ZodLiteral<"破壊">, z.ZodLiteral<"回復">, z.ZodLiteral<"神秘">, z.ZodLiteral<"召喚">, z.ZodLiteral<"強化">, z.ZodLiteral<"死魔">, z.ZodLiteral<"魔法熟練">, z.ZodLiteral<"自然調和">, z.ZodLiteral<"暗黒命令">, z.ZodLiteral<"取引">, z.ZodLiteral<"シャウト">, z.ZodLiteral<"音楽">, z.ZodLiteral<"盗み">, z.ZodLiteral<"ギャンブル">, z.ZodLiteral<"パフォーマンス">, z.ZodLiteral<"ダンス">, ...(z.ZodLiteral<"落下耐性"> | z.ZodLiteral<"水泳"> | z.ZodLiteral<"死体回収"> | z.ZodLiteral<"包帯"> | z.ZodLiteral<"自然回復"> | z.ZodLiteral<"採掘"> | z.ZodLiteral<"伐採"> | z.ZodLiteral<"収穫"> | z.ZodLiteral<"釣り"> | z.ZodLiteral<"解読"> | z.ZodLiteral<"耐火属性"> | z.ZodLiteral<"耐水属性"> | z.ZodLiteral<"耐地属性"> | z.ZodLiteral<"耐風属性"> | z.ZodLiteral<"耐無属性"> | z.ZodLiteral<"料理ゲージ滑り" | "料理ゲージ速度" | "料理ヒットゾーン" | "料理グレードゾーン" | "料理マスターグレードゾーン" | "鍛冶ゲージ滑り" | "鍛冶ゲージ速度" | "鍛冶ヒットゾーン" | "鍛冶グレードゾーン" | "鍛冶マスターグレードゾーン" | "醸造ゲージ滑り" | "醸造ゲージ速度" | "醸造ヒットゾーン" | "醸造グレードゾーン" | "醸造マスターグレードゾーン" | "大工ゲージ滑り" | "大工ゲージ速度" | "大工ヒットゾーン" | "大工グレードゾーン" | "大工マスターグレードゾーン" | "裁縫ゲージ滑り" | "裁縫ゲージ速度" | "裁縫ヒットゾーン" | "裁縫グレードゾーン" | "裁縫マスターグレードゾーン" | "薬調合ゲージ滑り" | "薬調合ゲージ速度" | "薬調合ヒットゾーン" | "薬調合グレードゾーン" | "薬調合マスターグレードゾーン" | "装飾細工ゲージ滑り" | "装飾細工ゲージ速度" | "装飾細工ヒットゾーン" | "装飾細工グレードゾーン" | "装飾細工マスターグレードゾーン" | "複製ゲージ滑り" | "複製ゲージ速度" | "複製ヒットゾーン" | "複製グレードゾーン" | "複製マスターグレードゾーン" | "栽培ゲージ滑り" | "栽培ゲージ速度" | "栽培ヒットゾーン" | "栽培グレードゾーン" | "栽培マスターグレードゾーン" | "美容ゲージ滑り" | "美容ゲージ速度" | "美容ヒットゾーン" | "美容グレードゾーン" | "美容マスターグレードゾーン"> | z.ZodLiteral<"ペット経験値"> | z.ZodLiteral<"火属性効果"> | z.ZodLiteral<"水属性効果"> | z.ZodLiteral<"土属性効果"> | z.ZodLiteral<"風属性効果"> | z.ZodLiteral<"無属性効果"> | z.ZodLiteral<"HP自然回復"> | z.ZodLiteral<"ST自然回復"> | z.ZodLiteral<"MP自然回復"> | z.ZodLiteral<"移動速度"> | z.ZodLiteral<"水中速度"> | z.ZodLiteral<"耐全属性"> | z.ZodLiteral<"SEEING"> | z.ZodLiteral<"HEARING"> | z.ZodLiteral<"SMELLING"> | z.ZodLiteral<"最大重量"> | z.ZodLiteral<"所持重量"> | z.ZodLiteral<"ジャンプ力"> | z.ZodLiteral<"落下速度"> | z.ZodLiteral<"落下ダメージ"> | z.ZodLiteral<"BREATH">)[], z.ZodLiteral<"キック命中率補正">, z.ZodLiteral<"キック攻撃力補正">, z.ZodLiteral<"釣りゲージ速度">, z.ZodLiteral<"釣りヒットゾーン">, z.ZodLiteral<"釣りゲージ長">, z.ZodLiteral<"泳ぎ速度">, z.ZodLiteral<"牙命中率補正">, z.ZodLiteral<"牙攻撃補正">, z.ZodLiteral<"栽培ゲージ速度">, z.ZodLiteral<"盗み補正">, z.ZodLiteral<"潤喉度">, z.ZodLiteral<"満腹度">, z.ZodLiteral<"ピッキング失敗回数補正">, z.ZodLiteral<"ピッキング回転速度補正">, z.ZodLiteral<"攻撃範囲増加">, z.ZodLiteral<"詠唱継続率">, z.ZodLiteral<"伐採命中">, z.ZodLiteral<"サイズ">]>;
        value: z.ZodUnion<[z.ZodNumber, z.ZodLiteral<"未検証">]>;
        group: z.ZodOptional<z.ZodString>;
        numberType: z.ZodOptional<z.ZodEnum<["percent"]>>;
    }, "strip", z.ZodTypeAny, {
        value: number | "未検証";
        type: "statusUp";
        subject: "素手" | "刀剣" | "こんぼう" | "槍" | "銃器" | "弓" | "盾" | "投げ" | "牙" | "罠" | "キック" | "戦闘技術" | "酩酊" | "物まね" | "調教" | "破壊" | "回復" | "神秘" | "召喚" | "強化" | "死魔" | "魔法熟練" | "自然調和" | "暗黒命令" | "取引" | "シャウト" | "音楽" | "盗み" | "ギャンブル" | "パフォーマンス" | "ダンス" | "落下耐性" | "水泳" | "死体回収" | "包帯" | "自然回復" | "採掘" | "伐採" | "収穫" | "釣り" | "解読" | "耐火属性" | "耐水属性" | "耐地属性" | "耐風属性" | "耐無属性" | "料理ゲージ滑り" | "料理ゲージ速度" | "料理ヒットゾーン" | "料理グレードゾーン" | "料理マスターグレードゾーン" | "鍛冶ゲージ滑り" | "鍛冶ゲージ速度" | "鍛冶ヒットゾーン" | "鍛冶グレードゾーン" | "鍛冶マスターグレードゾーン" | "醸造ゲージ滑り" | "醸造ゲージ速度" | "醸造ヒットゾーン" | "醸造グレードゾーン" | "醸造マスターグレードゾーン" | "大工ゲージ滑り" | "大工ゲージ速度" | "大工ヒットゾーン" | "大工グレードゾーン" | "大工マスターグレードゾーン" | "裁縫ゲージ滑り" | "裁縫ゲージ速度" | "裁縫ヒットゾーン" | "裁縫グレードゾーン" | "裁縫マスターグレードゾーン" | "薬調合ゲージ滑り" | "薬調合ゲージ速度" | "薬調合ヒットゾーン" | "薬調合グレードゾーン" | "薬調合マスターグレードゾーン" | "装飾細工ゲージ滑り" | "装飾細工ゲージ速度" | "装飾細工ヒットゾーン" | "装飾細工グレードゾーン" | "装飾細工マスターグレードゾーン" | "複製ゲージ滑り" | "複製ゲージ速度" | "複製ヒットゾーン" | "複製グレードゾーン" | "複製マスターグレードゾーン" | "栽培ゲージ滑り" | "栽培ゲージ速度" | "栽培ヒットゾーン" | "栽培グレードゾーン" | "栽培マスターグレードゾーン" | "美容ゲージ滑り" | "美容ゲージ速度" | "美容ヒットゾーン" | "美容グレードゾーン" | "美容マスターグレードゾーン" | "攻撃力" | "命中" | "物理与ダメージ" | "魔法与ダメージ" | "魔法ディレイ" | "クリティカル率" | "魔力" | "スペル短縮" | "攻撃ディレイ" | "最大HP" | "最大MP" | "最大ST" | "防御力" | "回避" | "ペット経験値" | "火属性効果" | "水属性効果" | "土属性効果" | "風属性効果" | "無属性効果" | "HP自然回復" | "ST自然回復" | "MP自然回復" | "移動速度" | "水中速度" | "耐全属性" | "SEEING" | "HEARING" | "SMELLING" | "最大重量" | "所持重量" | "ジャンプ力" | "落下速度" | "落下ダメージ" | "BREATH" | "キック命中率補正" | "キック攻撃力補正" | "釣りゲージ速度" | "釣りヒットゾーン" | "釣りゲージ長" | "泳ぎ速度" | "牙命中率補正" | "牙攻撃補正" | "盗み補正" | "潤喉度" | "満腹度" | "ピッキング失敗回数補正" | "ピッキング回転速度補正" | "攻撃範囲増加" | "詠唱継続率" | "伐採命中" | "サイズ";
        numberType?: "percent" | undefined;
        group?: string | undefined;
    }, {
        value: number | "未検証";
        type: "statusUp";
        subject: "素手" | "刀剣" | "こんぼう" | "槍" | "銃器" | "弓" | "盾" | "投げ" | "牙" | "罠" | "キック" | "戦闘技術" | "酩酊" | "物まね" | "調教" | "破壊" | "回復" | "神秘" | "召喚" | "強化" | "死魔" | "魔法熟練" | "自然調和" | "暗黒命令" | "取引" | "シャウト" | "音楽" | "盗み" | "ギャンブル" | "パフォーマンス" | "ダンス" | "落下耐性" | "水泳" | "死体回収" | "包帯" | "自然回復" | "採掘" | "伐採" | "収穫" | "釣り" | "解読" | "耐火属性" | "耐水属性" | "耐地属性" | "耐風属性" | "耐無属性" | "料理ゲージ滑り" | "料理ゲージ速度" | "料理ヒットゾーン" | "料理グレードゾーン" | "料理マスターグレードゾーン" | "鍛冶ゲージ滑り" | "鍛冶ゲージ速度" | "鍛冶ヒットゾーン" | "鍛冶グレードゾーン" | "鍛冶マスターグレードゾーン" | "醸造ゲージ滑り" | "醸造ゲージ速度" | "醸造ヒットゾーン" | "醸造グレードゾーン" | "醸造マスターグレードゾーン" | "大工ゲージ滑り" | "大工ゲージ速度" | "大工ヒットゾーン" | "大工グレードゾーン" | "大工マスターグレードゾーン" | "裁縫ゲージ滑り" | "裁縫ゲージ速度" | "裁縫ヒットゾーン" | "裁縫グレードゾーン" | "裁縫マスターグレードゾーン" | "薬調合ゲージ滑り" | "薬調合ゲージ速度" | "薬調合ヒットゾーン" | "薬調合グレードゾーン" | "薬調合マスターグレードゾーン" | "装飾細工ゲージ滑り" | "装飾細工ゲージ速度" | "装飾細工ヒットゾーン" | "装飾細工グレードゾーン" | "装飾細工マスターグレードゾーン" | "複製ゲージ滑り" | "複製ゲージ速度" | "複製ヒットゾーン" | "複製グレードゾーン" | "複製マスターグレードゾーン" | "栽培ゲージ滑り" | "栽培ゲージ速度" | "栽培ヒットゾーン" | "栽培グレードゾーン" | "栽培マスターグレードゾーン" | "美容ゲージ滑り" | "美容ゲージ速度" | "美容ヒットゾーン" | "美容グレードゾーン" | "美容マスターグレードゾーン" | "攻撃力" | "命中" | "物理与ダメージ" | "魔法与ダメージ" | "魔法ディレイ" | "クリティカル率" | "魔力" | "スペル短縮" | "攻撃ディレイ" | "最大HP" | "最大MP" | "最大ST" | "防御力" | "回避" | "ペット経験値" | "火属性効果" | "水属性効果" | "土属性効果" | "風属性効果" | "無属性効果" | "HP自然回復" | "ST自然回復" | "MP自然回復" | "移動速度" | "水中速度" | "耐全属性" | "SEEING" | "HEARING" | "SMELLING" | "最大重量" | "所持重量" | "ジャンプ力" | "落下速度" | "落下ダメージ" | "BREATH" | "キック命中率補正" | "キック攻撃力補正" | "釣りゲージ速度" | "釣りヒットゾーン" | "釣りゲージ長" | "泳ぎ速度" | "牙命中率補正" | "牙攻撃補正" | "盗み補正" | "潤喉度" | "満腹度" | "ピッキング失敗回数補正" | "ピッキング回転速度補正" | "攻撃範囲増加" | "詠唱継続率" | "伐採命中" | "サイズ";
        numberType?: "percent" | undefined;
        group?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"others">;
        subject: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "others";
        subject: string;
    }, {
        type: "others";
        subject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"transform">;
        subject: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "transform";
        subject: string;
        description?: string | undefined;
    }, {
        type: "transform";
        subject: string;
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"standMotionChange">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "standMotionChange";
        description?: string | undefined;
    }, {
        type: "standMotionChange";
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"moveMotionChange">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "moveMotionChange";
        description?: string | undefined;
    }, {
        type: "moveMotionChange";
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"recovery">;
        subject: z.ZodUnion<[z.ZodLiteral<"MP">, z.ZodLiteral<"HP">, z.ZodLiteral<"SP">]>;
        value: z.ZodNumber;
        probability: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number;
        type: "recovery";
        subject: "MP" | "HP" | "SP";
        probability: number;
    }, {
        value: number;
        type: "recovery";
        subject: "MP" | "HP" | "SP";
        probability: number;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"costRatio">;
        subject: z.ZodUnion<[z.ZodLiteral<"MP">, z.ZodLiteral<"HP">, z.ZodLiteral<"SP">]>;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number;
        type: "costRatio";
        subject: "MP" | "HP" | "SP";
    }, {
        value: number;
        type: "costRatio";
        subject: "MP" | "HP" | "SP";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"delayCut">;
        subject: z.ZodUnion<[z.ZodLiteral<"筋力">, z.ZodLiteral<"着こなし">, z.ZodLiteral<"攻撃回避">, z.ZodLiteral<"生命力">, z.ZodLiteral<"知能">, z.ZodLiteral<"持久力">, z.ZodLiteral<"精神力">, z.ZodLiteral<"集中力">, z.ZodLiteral<"呪文抵抗">, ...(z.ZodLiteral<"落下耐性"> | z.ZodLiteral<"水泳"> | z.ZodLiteral<"死体回収"> | z.ZodLiteral<"包帯"> | z.ZodLiteral<"自然回復"> | z.ZodLiteral<"採掘"> | z.ZodLiteral<"伐採"> | z.ZodLiteral<"収穫"> | z.ZodLiteral<"釣り"> | z.ZodLiteral<"解読">)[], z.ZodLiteral<"素手">, z.ZodLiteral<"刀剣">, z.ZodLiteral<"こんぼう">, z.ZodLiteral<"槍">, z.ZodLiteral<"銃器">, z.ZodLiteral<"弓">, z.ZodLiteral<"盾">, z.ZodLiteral<"投げ">, z.ZodLiteral<"牙">, z.ZodLiteral<"罠">, z.ZodLiteral<"キック">, z.ZodLiteral<"戦闘技術">, z.ZodLiteral<"酩酊">, z.ZodLiteral<"物まね">, z.ZodLiteral<"調教">, z.ZodLiteral<"破壊">, z.ZodLiteral<"回復">, z.ZodLiteral<"神秘">, z.ZodLiteral<"召喚">, z.ZodLiteral<"強化">, z.ZodLiteral<"死魔">, z.ZodLiteral<"魔法熟練">, z.ZodLiteral<"自然調和">, z.ZodLiteral<"暗黒命令">, z.ZodLiteral<"取引">, z.ZodLiteral<"シャウト">, z.ZodLiteral<"音楽">, z.ZodLiteral<"盗み">, z.ZodLiteral<"ギャンブル">, z.ZodLiteral<"パフォーマンス">, z.ZodLiteral<"ダンス">, z.ZodLiteral<"料理">, z.ZodLiteral<"鍛冶">, z.ZodLiteral<"醸造">, z.ZodLiteral<"大工">, z.ZodLiteral<"裁縫">, z.ZodLiteral<"薬調合">, z.ZodLiteral<"装飾細工">, z.ZodLiteral<"複製">, z.ZodLiteral<"栽培">, z.ZodLiteral<"美容">, z.ZodLiteral<"アイテム使用">]>;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number;
        type: "delayCut";
        subject: "筋力" | "着こなし" | "攻撃回避" | "生命力" | "知能" | "持久力" | "精神力" | "集中力" | "呪文抵抗" | "素手" | "刀剣" | "こんぼう" | "槍" | "銃器" | "弓" | "盾" | "投げ" | "牙" | "罠" | "キック" | "戦闘技術" | "酩酊" | "物まね" | "調教" | "破壊" | "回復" | "神秘" | "召喚" | "強化" | "死魔" | "魔法熟練" | "自然調和" | "暗黒命令" | "取引" | "シャウト" | "音楽" | "盗み" | "ギャンブル" | "パフォーマンス" | "ダンス" | "落下耐性" | "水泳" | "死体回収" | "包帯" | "自然回復" | "採掘" | "伐採" | "収穫" | "釣り" | "解読" | "料理" | "鍛冶" | "醸造" | "大工" | "裁縫" | "薬調合" | "装飾細工" | "複製" | "栽培" | "美容" | "アイテム使用";
    }, {
        value: number;
        type: "delayCut";
        subject: "筋力" | "着こなし" | "攻撃回避" | "生命力" | "知能" | "持久力" | "精神力" | "集中力" | "呪文抵抗" | "素手" | "刀剣" | "こんぼう" | "槍" | "銃器" | "弓" | "盾" | "投げ" | "牙" | "罠" | "キック" | "戦闘技術" | "酩酊" | "物まね" | "調教" | "破壊" | "回復" | "神秘" | "召喚" | "強化" | "死魔" | "魔法熟練" | "自然調和" | "暗黒命令" | "取引" | "シャウト" | "音楽" | "盗み" | "ギャンブル" | "パフォーマンス" | "ダンス" | "落下耐性" | "水泳" | "死体回収" | "包帯" | "自然回復" | "採掘" | "伐採" | "収穫" | "釣り" | "解読" | "料理" | "鍛冶" | "醸造" | "大工" | "裁縫" | "薬調合" | "装飾細工" | "複製" | "栽培" | "美容" | "アイテム使用";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"manufacture">;
        subject: z.ZodUnion<[z.ZodLiteral<"料理">, z.ZodLiteral<"鍛冶">, z.ZodLiteral<"醸造">, z.ZodLiteral<"大工">, z.ZodLiteral<"裁縫">, z.ZodLiteral<"薬調合">, z.ZodLiteral<"装飾細工">, z.ZodLiteral<"複製">, z.ZodLiteral<"栽培">, z.ZodLiteral<"美容">, z.ZodLiteral<"全生産">]>;
        process: z.ZodUnion<readonly [z.ZodLiteral<"ゲージ滑り">, z.ZodLiteral<"ゲージ速度">, z.ZodLiteral<"ヒットゾーン">, z.ZodLiteral<"グレードゾーン">, z.ZodLiteral<"マスターグレードゾーン">]>;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number;
        type: "manufacture";
        subject: "料理" | "鍛冶" | "醸造" | "大工" | "裁縫" | "薬調合" | "装飾細工" | "複製" | "栽培" | "美容" | "全生産";
        process: "ゲージ滑り" | "ゲージ速度" | "ヒットゾーン" | "グレードゾーン" | "マスターグレードゾーン";
    }, {
        value: number;
        type: "manufacture";
        subject: "料理" | "鍛冶" | "醸造" | "大工" | "裁縫" | "薬調合" | "装飾細工" | "複製" | "栽培" | "美容" | "全生産";
        process: "ゲージ滑り" | "ゲージ速度" | "ヒットゾーン" | "グレードゾーン" | "マスターグレードゾーン";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"technique">;
        subject: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "technique";
        subject: string;
    }, {
        type: "technique";
        subject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"followAttack">;
        subject: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "followAttack";
        subject: string;
    }, {
        type: "followAttack";
        subject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"techniqueMotionChange">;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "techniqueMotionChange";
        description?: string | undefined;
    }, {
        type: "techniqueMotionChange";
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"prevent">;
        subject: z.ZodUnion<[z.ZodLiteral<"満腹度減少">, z.ZodLiteral<"潤喉度減少">, z.ZodLiteral<"水中呼吸減少">, z.ZodLiteral<"ペット死亡時忠誠減少">, z.ZodLiteral<"ステータス減少">, z.ZodLiteral<"毒">, z.ZodLiteral<"病気">, z.ZodLiteral<"魔法攻撃">, z.ZodLiteral<"物理攻撃">]>;
        ratio: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "prevent";
        subject: "満腹度減少" | "潤喉度減少" | "水中呼吸減少" | "ペット死亡時忠誠減少" | "ステータス減少" | "毒" | "病気" | "魔法攻撃" | "物理攻撃";
        ratio: number;
    }, {
        type: "prevent";
        subject: "満腹度減少" | "潤喉度減少" | "水中呼吸減少" | "ペット死亡時忠誠減少" | "ステータス減少" | "毒" | "病気" | "魔法攻撃" | "物理攻撃";
        ratio: number;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"damageUp">;
        subject: z.ZodUnion<[z.ZodLiteral<"悪魔">, z.ZodLiteral<"巨人">, z.ZodLiteral<"鳥">, z.ZodLiteral<"アンデッド">]>;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number;
        type: "damageUp";
        subject: "悪魔" | "巨人" | "鳥" | "アンデッド";
    }, {
        value: number;
        type: "damageUp";
        subject: "悪魔" | "巨人" | "鳥" | "アンデッド";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"reflection">;
        subject: z.ZodUnion<[z.ZodLiteral<"物理攻撃">, z.ZodLiteral<"魔法攻撃">]>;
        ratio: z.ZodNumber;
        probability: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "reflection";
        subject: "魔法攻撃" | "物理攻撃";
        probability: number;
        ratio: number;
    }, {
        type: "reflection";
        subject: "魔法攻撃" | "物理攻撃";
        probability: number;
        ratio: number;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"buffAssign">;
        trigger: z.ZodLiteral<"被ダメージ">;
        buffSubject: z.ZodString;
        probability: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "buffAssign";
        probability: number;
        trigger: "被ダメージ";
        buffSubject: string;
    }, {
        type: "buffAssign";
        probability: number;
        trigger: "被ダメージ";
        buffSubject: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"prohibit">;
        subject: z.ZodUnion<[z.ZodLiteral<"移動">, z.ZodLiteral<"テクニック">]>;
    }, "strip", z.ZodTypeAny, {
        type: "prohibit";
        subject: "移動" | "テクニック";
    }, {
        type: "prohibit";
        subject: "移動" | "テクニック";
    }>, z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"friendship">;
        all: z.ZodLiteral<true>;
    }, "strip", z.ZodTypeAny, {
        type: "friendship";
        all: true;
    }, {
        type: "friendship";
        all: true;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"friendship">;
        all: z.ZodOptional<z.ZodLiteral<false>>;
        subject: z.ZodArray<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"獣">, z.ZodLiteral<"鳥">]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "friendship";
        subject: ("鳥" | "獣" | undefined)[];
        all?: false | undefined;
    }, {
        type: "friendship";
        subject: ("鳥" | "獣" | undefined)[];
        all?: false | undefined;
    }>]>, z.ZodObject<{
        type: z.ZodLiteral<"avoid">;
        subject: z.ZodUnion<[z.ZodLiteral<"物理攻撃">, z.ZodLiteral<"魔法攻撃">]>;
        threshold: z.ZodOptional<z.ZodNumber>;
        probability: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "avoid";
        subject: "魔法攻撃" | "物理攻撃";
        probability?: number | undefined;
        threshold?: number | undefined;
    }, {
        type: "avoid";
        subject: "魔法攻撃" | "物理攻撃";
        probability?: number | undefined;
        threshold?: number | undefined;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    description: string;
    name: string;
    effects: ({
        value: number | "未検証";
        type: "statusUp";
        subject: "素手" | "刀剣" | "こんぼう" | "槍" | "銃器" | "弓" | "盾" | "投げ" | "牙" | "罠" | "キック" | "戦闘技術" | "酩酊" | "物まね" | "調教" | "破壊" | "回復" | "神秘" | "召喚" | "強化" | "死魔" | "魔法熟練" | "自然調和" | "暗黒命令" | "取引" | "シャウト" | "音楽" | "盗み" | "ギャンブル" | "パフォーマンス" | "ダンス" | "落下耐性" | "水泳" | "死体回収" | "包帯" | "自然回復" | "採掘" | "伐採" | "収穫" | "釣り" | "解読" | "耐火属性" | "耐水属性" | "耐地属性" | "耐風属性" | "耐無属性" | "料理ゲージ滑り" | "料理ゲージ速度" | "料理ヒットゾーン" | "料理グレードゾーン" | "料理マスターグレードゾーン" | "鍛冶ゲージ滑り" | "鍛冶ゲージ速度" | "鍛冶ヒットゾーン" | "鍛冶グレードゾーン" | "鍛冶マスターグレードゾーン" | "醸造ゲージ滑り" | "醸造ゲージ速度" | "醸造ヒットゾーン" | "醸造グレードゾーン" | "醸造マスターグレードゾーン" | "大工ゲージ滑り" | "大工ゲージ速度" | "大工ヒットゾーン" | "大工グレードゾーン" | "大工マスターグレードゾーン" | "裁縫ゲージ滑り" | "裁縫ゲージ速度" | "裁縫ヒットゾーン" | "裁縫グレードゾーン" | "裁縫マスターグレードゾーン" | "薬調合ゲージ滑り" | "薬調合ゲージ速度" | "薬調合ヒットゾーン" | "薬調合グレードゾーン" | "薬調合マスターグレードゾーン" | "装飾細工ゲージ滑り" | "装飾細工ゲージ速度" | "装飾細工ヒットゾーン" | "装飾細工グレードゾーン" | "装飾細工マスターグレードゾーン" | "複製ゲージ滑り" | "複製ゲージ速度" | "複製ヒットゾーン" | "複製グレードゾーン" | "複製マスターグレードゾーン" | "栽培ゲージ滑り" | "栽培ゲージ速度" | "栽培ヒットゾーン" | "栽培グレードゾーン" | "栽培マスターグレードゾーン" | "美容ゲージ滑り" | "美容ゲージ速度" | "美容ヒットゾーン" | "美容グレードゾーン" | "美容マスターグレードゾーン" | "攻撃力" | "命中" | "物理与ダメージ" | "魔法与ダメージ" | "魔法ディレイ" | "クリティカル率" | "魔力" | "スペル短縮" | "攻撃ディレイ" | "最大HP" | "最大MP" | "最大ST" | "防御力" | "回避" | "ペット経験値" | "火属性効果" | "水属性効果" | "土属性効果" | "風属性効果" | "無属性効果" | "HP自然回復" | "ST自然回復" | "MP自然回復" | "移動速度" | "水中速度" | "耐全属性" | "SEEING" | "HEARING" | "SMELLING" | "最大重量" | "所持重量" | "ジャンプ力" | "落下速度" | "落下ダメージ" | "BREATH" | "キック命中率補正" | "キック攻撃力補正" | "釣りゲージ速度" | "釣りヒットゾーン" | "釣りゲージ長" | "泳ぎ速度" | "牙命中率補正" | "牙攻撃補正" | "盗み補正" | "潤喉度" | "満腹度" | "ピッキング失敗回数補正" | "ピッキング回転速度補正" | "攻撃範囲増加" | "詠唱継続率" | "伐採命中" | "サイズ";
        numberType?: "percent" | undefined;
        group?: string | undefined;
    } | {
        type: "others";
        subject: string;
    } | {
        type: "transform";
        subject: string;
        description?: string | undefined;
    } | {
        type: "standMotionChange";
        description?: string | undefined;
    } | {
        type: "moveMotionChange";
        description?: string | undefined;
    } | {
        type: "techniqueMotionChange";
        description?: string | undefined;
    } | {
        value: number;
        type: "recovery";
        subject: "MP" | "HP" | "SP";
        probability: number;
    } | {
        value: number;
        type: "costRatio";
        subject: "MP" | "HP" | "SP";
    } | {
        value: number;
        type: "delayCut";
        subject: "筋力" | "着こなし" | "攻撃回避" | "生命力" | "知能" | "持久力" | "精神力" | "集中力" | "呪文抵抗" | "素手" | "刀剣" | "こんぼう" | "槍" | "銃器" | "弓" | "盾" | "投げ" | "牙" | "罠" | "キック" | "戦闘技術" | "酩酊" | "物まね" | "調教" | "破壊" | "回復" | "神秘" | "召喚" | "強化" | "死魔" | "魔法熟練" | "自然調和" | "暗黒命令" | "取引" | "シャウト" | "音楽" | "盗み" | "ギャンブル" | "パフォーマンス" | "ダンス" | "落下耐性" | "水泳" | "死体回収" | "包帯" | "自然回復" | "採掘" | "伐採" | "収穫" | "釣り" | "解読" | "料理" | "鍛冶" | "醸造" | "大工" | "裁縫" | "薬調合" | "装飾細工" | "複製" | "栽培" | "美容" | "アイテム使用";
    } | {
        value: number;
        type: "manufacture";
        subject: "料理" | "鍛冶" | "醸造" | "大工" | "裁縫" | "薬調合" | "装飾細工" | "複製" | "栽培" | "美容" | "全生産";
        process: "ゲージ滑り" | "ゲージ速度" | "ヒットゾーン" | "グレードゾーン" | "マスターグレードゾーン";
    } | {
        type: "technique";
        subject: string;
    } | {
        type: "followAttack";
        subject: string;
    } | {
        type: "prevent";
        subject: "満腹度減少" | "潤喉度減少" | "水中呼吸減少" | "ペット死亡時忠誠減少" | "ステータス減少" | "毒" | "病気" | "魔法攻撃" | "物理攻撃";
        ratio: number;
    } | {
        type: "avoid";
        subject: "魔法攻撃" | "物理攻撃";
        probability?: number | undefined;
        threshold?: number | undefined;
    } | {
        type: "reflection";
        subject: "魔法攻撃" | "物理攻撃";
        probability: number;
        ratio: number;
    } | {
        value: number;
        type: "damageUp";
        subject: "悪魔" | "巨人" | "鳥" | "アンデッド";
    } | {
        type: "buffAssign";
        probability: number;
        trigger: "被ダメージ";
        buffSubject: string;
    } | {
        type: "prohibit";
        subject: "移動" | "テクニック";
    } | {
        type: "friendship";
        all: true;
    } | {
        type: "friendship";
        subject: ("鳥" | "獣" | undefined)[];
        all?: false | undefined;
    })[];
    unedited?: false | undefined;
    noBuffSlot?: boolean | undefined;
}, {
    description: string;
    name: string;
    effects: ({
        value: number | "未検証";
        type: "statusUp";
        subject: "素手" | "刀剣" | "こんぼう" | "槍" | "銃器" | "弓" | "盾" | "投げ" | "牙" | "罠" | "キック" | "戦闘技術" | "酩酊" | "物まね" | "調教" | "破壊" | "回復" | "神秘" | "召喚" | "強化" | "死魔" | "魔法熟練" | "自然調和" | "暗黒命令" | "取引" | "シャウト" | "音楽" | "盗み" | "ギャンブル" | "パフォーマンス" | "ダンス" | "落下耐性" | "水泳" | "死体回収" | "包帯" | "自然回復" | "採掘" | "伐採" | "収穫" | "釣り" | "解読" | "耐火属性" | "耐水属性" | "耐地属性" | "耐風属性" | "耐無属性" | "料理ゲージ滑り" | "料理ゲージ速度" | "料理ヒットゾーン" | "料理グレードゾーン" | "料理マスターグレードゾーン" | "鍛冶ゲージ滑り" | "鍛冶ゲージ速度" | "鍛冶ヒットゾーン" | "鍛冶グレードゾーン" | "鍛冶マスターグレードゾーン" | "醸造ゲージ滑り" | "醸造ゲージ速度" | "醸造ヒットゾーン" | "醸造グレードゾーン" | "醸造マスターグレードゾーン" | "大工ゲージ滑り" | "大工ゲージ速度" | "大工ヒットゾーン" | "大工グレードゾーン" | "大工マスターグレードゾーン" | "裁縫ゲージ滑り" | "裁縫ゲージ速度" | "裁縫ヒットゾーン" | "裁縫グレードゾーン" | "裁縫マスターグレードゾーン" | "薬調合ゲージ滑り" | "薬調合ゲージ速度" | "薬調合ヒットゾーン" | "薬調合グレードゾーン" | "薬調合マスターグレードゾーン" | "装飾細工ゲージ滑り" | "装飾細工ゲージ速度" | "装飾細工ヒットゾーン" | "装飾細工グレードゾーン" | "装飾細工マスターグレードゾーン" | "複製ゲージ滑り" | "複製ゲージ速度" | "複製ヒットゾーン" | "複製グレードゾーン" | "複製マスターグレードゾーン" | "栽培ゲージ滑り" | "栽培ゲージ速度" | "栽培ヒットゾーン" | "栽培グレードゾーン" | "栽培マスターグレードゾーン" | "美容ゲージ滑り" | "美容ゲージ速度" | "美容ヒットゾーン" | "美容グレードゾーン" | "美容マスターグレードゾーン" | "攻撃力" | "命中" | "物理与ダメージ" | "魔法与ダメージ" | "魔法ディレイ" | "クリティカル率" | "魔力" | "スペル短縮" | "攻撃ディレイ" | "最大HP" | "最大MP" | "最大ST" | "防御力" | "回避" | "ペット経験値" | "火属性効果" | "水属性効果" | "土属性効果" | "風属性効果" | "無属性効果" | "HP自然回復" | "ST自然回復" | "MP自然回復" | "移動速度" | "水中速度" | "耐全属性" | "SEEING" | "HEARING" | "SMELLING" | "最大重量" | "所持重量" | "ジャンプ力" | "落下速度" | "落下ダメージ" | "BREATH" | "キック命中率補正" | "キック攻撃力補正" | "釣りゲージ速度" | "釣りヒットゾーン" | "釣りゲージ長" | "泳ぎ速度" | "牙命中率補正" | "牙攻撃補正" | "盗み補正" | "潤喉度" | "満腹度" | "ピッキング失敗回数補正" | "ピッキング回転速度補正" | "攻撃範囲増加" | "詠唱継続率" | "伐採命中" | "サイズ";
        numberType?: "percent" | undefined;
        group?: string | undefined;
    } | {
        type: "others";
        subject: string;
    } | {
        type: "transform";
        subject: string;
        description?: string | undefined;
    } | {
        type: "standMotionChange";
        description?: string | undefined;
    } | {
        type: "moveMotionChange";
        description?: string | undefined;
    } | {
        type: "techniqueMotionChange";
        description?: string | undefined;
    } | {
        value: number;
        type: "recovery";
        subject: "MP" | "HP" | "SP";
        probability: number;
    } | {
        value: number;
        type: "costRatio";
        subject: "MP" | "HP" | "SP";
    } | {
        value: number;
        type: "delayCut";
        subject: "筋力" | "着こなし" | "攻撃回避" | "生命力" | "知能" | "持久力" | "精神力" | "集中力" | "呪文抵抗" | "素手" | "刀剣" | "こんぼう" | "槍" | "銃器" | "弓" | "盾" | "投げ" | "牙" | "罠" | "キック" | "戦闘技術" | "酩酊" | "物まね" | "調教" | "破壊" | "回復" | "神秘" | "召喚" | "強化" | "死魔" | "魔法熟練" | "自然調和" | "暗黒命令" | "取引" | "シャウト" | "音楽" | "盗み" | "ギャンブル" | "パフォーマンス" | "ダンス" | "落下耐性" | "水泳" | "死体回収" | "包帯" | "自然回復" | "採掘" | "伐採" | "収穫" | "釣り" | "解読" | "料理" | "鍛冶" | "醸造" | "大工" | "裁縫" | "薬調合" | "装飾細工" | "複製" | "栽培" | "美容" | "アイテム使用";
    } | {
        value: number;
        type: "manufacture";
        subject: "料理" | "鍛冶" | "醸造" | "大工" | "裁縫" | "薬調合" | "装飾細工" | "複製" | "栽培" | "美容" | "全生産";
        process: "ゲージ滑り" | "ゲージ速度" | "ヒットゾーン" | "グレードゾーン" | "マスターグレードゾーン";
    } | {
        type: "technique";
        subject: string;
    } | {
        type: "followAttack";
        subject: string;
    } | {
        type: "prevent";
        subject: "満腹度減少" | "潤喉度減少" | "水中呼吸減少" | "ペット死亡時忠誠減少" | "ステータス減少" | "毒" | "病気" | "魔法攻撃" | "物理攻撃";
        ratio: number;
    } | {
        type: "avoid";
        subject: "魔法攻撃" | "物理攻撃";
        probability?: number | undefined;
        threshold?: number | undefined;
    } | {
        type: "reflection";
        subject: "魔法攻撃" | "物理攻撃";
        probability: number;
        ratio: number;
    } | {
        value: number;
        type: "damageUp";
        subject: "悪魔" | "巨人" | "鳥" | "アンデッド";
    } | {
        type: "buffAssign";
        probability: number;
        trigger: "被ダメージ";
        buffSubject: string;
    } | {
        type: "prohibit";
        subject: "移動" | "テクニック";
    } | {
        type: "friendship";
        all: true;
    } | {
        type: "friendship";
        subject: ("鳥" | "獣" | undefined)[];
        all?: false | undefined;
    })[];
    unedited?: false | undefined;
    noBuffSlot?: boolean | undefined;
}>]>;
export type Buff = z.infer<typeof buffSchema>;
export {};
