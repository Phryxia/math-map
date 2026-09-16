# Kolyvagin 계와 핵심계수

# 개요

[Euler 계](euler-systems.md)의 논법에는 두 가지 불만이 남는다.

첫째, 결론이 **상계**뿐이다. "Selmer 군이 이보다 작다" 는 얻지만 "정확히 이만하다" 는 얻지 못한다. 둘째, 이론의 무게중심이 **존재성**에 쏠려 있다. 자취 정합성을 만족하는 대수적 원소의 탑을 실제로 만드는 일은 매번 새로운 기적이고, 그 기적이 일어난 뒤에 무슨 일이 벌어지는지는 사례마다 다시 따져야 했다.

Mazur 와 Rubin 은 이 구조를 뒤집었다. Euler 계 자체를 버리고 거기서 나온 **유도류의 족만 남겨** 공리화한 것이 **Kolyvagin 계**다. 그러면 질문이 달라진다. "이런 족이 존재하는가" 가 아니라 **"이런 족 전체가 이루는 가군이 무엇인가"** 를 묻게 된다.

답은 놀랍도록 깔끔하다. Selmer 구조 $\mathcal F$ 에 **핵심계수**(core rank) $\chi(\mathcal F)\in\mathbb Z$ 라는 정수 하나가 붙고, 이 수 하나가 모든 것을 결정한다.

| $\chi(\mathcal F)$ | Kolyvagin 계의 가군 $\mathbf{KS}(T,\mathcal F)$ |
| --- | --- |
| $0$ | $0$ (쓸 수 있는 계가 없다) |
| $1$ | 자유 순위 $1$ — 생성원 하나가 Selmer 군을 **정확히** 계산한다 |
| $\ge2$ | 지나치게 크고 경직성이 없다 |

핵심계수는 **국소 데이터만으로 계산된다.** 각 자리에서 국소 조건의 차원과 $H^0$ 의 차원을 빼서 더하면 끝이다. 그러니 "이 상황에서 Kolyvagin 계 논법이 통하는가" 라는 물음이 유한한 선형대수로 환원된다. 상계가 등식으로 바뀌는 지점이 바로 여기다.

# 직관

## 유도류만 남긴다

Euler 계 $\mathbf{c}=\lbrace c_F\rbrace$ 는 수체의 탑 위에 얹힌 거대한 대상이고, Kolyvagin 유도 연산자가 거기서 유도류 $\kappa_n\in H^1(K,T)$ 를 뽑아낸다. 실제 증명에서 쓰이는 것은 $\kappa_n$ 뿐이다. $c_F$ 는 $\kappa_n$ 을 만든 뒤 다시 등장하지 않는다.

그렇다면 $\kappa$ 가 만족하는 성질을 목록으로 적고 그것을 정의로 삼으면 된다. 목록은 두 줄이다.

1. $\kappa_n$ 은 $n$ 에서 **변형된** Selmer 군에 산다. 곧 $n$ 의 소인수 $\ell$ 마다 원래 조건을 어기되, 정확히 지정된 방식으로만 어긴다.
2. $\kappa_n$ 과 $\kappa_{n\ell}$ 은 $\ell$ 자리에서 **정합**한다. $\kappa_n$ 의 불분기 성분이 $\kappa_{n\ell}$ 의 분기 성분을 결정한다.

두 번째 줄이 Euler 계의 자취 정합성을 대신한다. 자취 관계가 $\ell$ 자리의 국소 관계로 번역되어 남은 것이다.

## 국소 조건을 하나 바꾸면 무슨 일이 일어나는가

Selmer 군은 자리마다 부분군 $H^1_{\mathcal F}(K_v,T)\subseteq H^1(K_v,T)$ 를 하나씩 지정해 잘라낸 것이다. 한 자리 $\ell$ 에서 조건을 **넓히면** Selmer 군은 커진다. 당연하다.

덜 당연한 것은 **쌍대 쪽**에서 벌어지는 일이다. [국소 Tate 쌍대성](poitou-tate.md) 아래 조건을 넓히면 그 소멸자는 좁아지고, 쌍대 Selmer 군 $H^1_{\mathcal F^\ast}(K,T^\ast)$ 는 그만큼 작아진다. 두 변화량은 우연히 비슷한 게 아니라 **정확히 상쇄된다.**

$$
\frac{|H^1_{\mathcal F'}(K,T)|}{|H^1_{\mathcal F}(K,T)|}\cdot\frac{|H^1_{\mathcal F^*}(K,T^*)|}{|H^1_{\mathcal F'^*}(K,T^*)|}=\frac{|H^1_{\mathcal F'}(K_\ell,T)|}{|H^1_{\mathcal F}(K_\ell,T)|}
$$

시소다. 한쪽이 올라간 만큼 다른 쪽이 내려가고, 기울기는 국소적으로 읽힌다. 이 시소가 Euler 계 논법의 전부라 해도 지나치지 않다. Kolyvagin 논법이 "$\ell$ 자리를 하나 열어 $s$ 의 국소 성분을 죽인다" 로 진행되는 것은, 시소의 한쪽을 눌러 다른 쪽을 들어 올리는 조작이다.

## 핵심계수는 시소의 기준선이다

시소 항등식은 **차** $\dim H^1_{\mathcal F}(K,T)-\dim H^1_{\mathcal F^\ast}(K,T^\ast)$ 가 국소 데이터만으로 정해진다는 말이다. 이 차가 핵심계수 $\chi(\mathcal F)$ 다.

그런데 Kolyvagin 소수 $\ell$ 에서 쓰는 변형은 "불분기 조건을 같은 크기의 다른 부분군(가로지름 조건)으로 바꾸는 것" 이다. 크기가 같으니 $\chi$ 는 **변하지 않는다.** 즉 $\chi$ 는 $n$ 에 의존하지 않는 불변량이고, Kolyvagin 계가 돌아다니는 격자 전체에 걸쳐 상수다. 이름에 "핵심" 이 붙은 이유가 그것이다.

## 왜 하필 $1$ 인가

$\chi=1$ 이라는 조건은 "Selmer 쪽과 쌍대 Selmer 쪽의 균형이 정확히 한 칸 어긋나 있다" 는 뜻이다. 이 한 칸이 Kolyvagin 계에 자유도 $1$ 을 주고, 그 자유도가 **곱셈 상수 하나** 로 나타난다. 계를 결정하는 데 상수 하나면 충분하니, 어떤 Euler 계에서 나온 계든 서로 상수배이고, 따라서 **하나를 알면 전부를 안다.**

$\chi=0$ 이면 자유도가 없어 계가 $0$ 뿐이고, $\chi\ge2$ 이면 계가 너무 많아 하나를 안다고 나머지를 통제하지 못한다. 정보량이 딱 맞는 곳이 $\chi=1$ 이다.

타원곡선에서 이 $1$ 이 어디서 오는지가 특히 아름답다. 자기쌍대 구조 자체는 $\chi=0$ 이고, $p$ 자리의 조건을 완화해야 $\chi=1$ 이 된다. 그 계산에서 $-1$ 을 기여하는 것은 **실수 자리**다. 복소켤레의 $+1$ 고유공간이 $1$ 차원이라는 사실, 곧 $E(\mathbb R)$ 이 한 개의 실차원을 갖는다는 사실이 균형을 한 칸 어긋나게 만든다. 아래 성질 절에서 이 계산을 자리별로 적는다.

# 정의

이하 $R$ 은 $\mathbb Z/p^k$ 또는 $\mathbb Z_p$ 이고 $T$ 는 $R$ 위 자유이고 $G_K$ 가 연속으로 작용하는 가군이다. $T^*=\mathrm{Hom}(T,\mu_{p^k})$ 를 Cartier 쌍대라 한다.

## Selmer 구조

**Selmer 구조** $\mathcal F$ 는 다음 자료다.

- 유한집합 $\Sigma\supseteq\lbrace p,\infty\rbrace\cup\lbrace T\text{ 가 분기하는 자리}\rbrace$
- 각 $v\in\Sigma$ 마다 부분가군 $H^1_{\mathcal F}(K_v,T)\subseteq H^1(K_v,T)$

$v\notin\Sigma$ 에서는 불분기 조건 $H^1_{\mathrm{ur}}(K_v,T)=H^1(K_v^{\mathrm{ur}}/K_v,T^{I_v})$ 를 쓴다. 그러면

$$
H^1_{\mathcal F}(K,T)=\ker\Big(H^1(K_\Sigma/K,T)\longrightarrow\bigoplus_{v\in\Sigma}\frac{H^1(K_v,T)}{H^1_{\mathcal F}(K_v,T)}\Big)
$$

이다. **쌍대 구조** $\mathcal F^*$ 는 각 자리에서 국소 Tate 쌍대성의 소멸자로 정의한다.

$$
H^1_{\mathcal F^*}(K_v,T^*):=H^1_{\mathcal F}(K_v,T)^{\perp}
$$

$\mathcal F=\mathcal F^*$ 이면 **자기쌍대**라 한다. 타원곡선의 $T=E[p^k]$ 에 Weil 쌍이 주는 구조가 대표적이다.

## 세 가지 변형

한 자리 $\ell$ 에서 조건을 바꾸는 방식은 셋이다.

| 이름 | 조건 | 기호 |
| --- | --- | --- |
| 완화(relaxed) | $H^1(K_\ell,T)$ 전체 | $\mathcal F^{\ell}$ |
| 엄격(strict) | $0$ | $\mathcal F_{\ell}$ |
| 가로지름(transverse) | 아래 정의 | $\mathcal F(\ell)$ |

**Kolyvagin 소수**란 $\ell\notin\Sigma$ 이면서 $\ell\equiv1\ (\mathrm{mod}\ p^k)$ 이고 $\mathrm{Fr}_\ell$ 이 $T$ 위에 자명하게 작용하는 소수다. 이때 국소 코호몰로지가 두 조각으로 갈린다.

$$
H^1(K_\ell,T)=H^1_{\mathrm{f}}(K_\ell,T)\oplus H^1_{\mathrm{tr}}(K_\ell,T),\qquad H^1_{\mathrm{f}}\cong T\cong H^1_{\mathrm{tr}}
$$

$H^1_{\mathrm{f}}$ 는 불분기 부분이고, $H^1_{\mathrm{tr}}$ 는 $\ell$ 의 차수 $p^k$ 순종 확대 $K_\ell(\ell^{1/p^k})$ 에서 죽는 류들이다. 둘은 크기가 같고 서로를 보완한다. **가로지름 조건**이란 $\ell$ 에서 $H^1_{\mathrm{f}}$ 대신 $H^1_{\mathrm{tr}}$ 를 쓰는 것이다.

$n$ 이 Kolyvagin 소수들의 곱일 때 $\mathcal F(n)$ 은 $n$ 의 모든 소인수에서 가로지름으로 바꾼 구조다. $\mathcal N$ 을 그런 $n$ 들의 집합이라 하면, $\mathcal N$ 은 $n$ 과 $n\ell$ 을 잇는 간선으로 그래프가 된다.

```mermaid
graph LR
  n1["n = 1"] ---|ℓ1| n2["ℓ1"]
  n1 ---|ℓ2| n3["ℓ2"]
  n2 ---|ℓ2| n4["ℓ1·ℓ2"]
  n3 ---|ℓ1| n4
  n4 ---|ℓ3| n5["ℓ1·ℓ2·ℓ3"]
  n2 ---|ℓ3| n6["ℓ1·ℓ3"]
  n6 ---|ℓ2| n5
```

Kolyvagin 계는 이 그래프의 각 정점에 코호몰로지 류를 하나씩 얹고, 간선마다 정합 조건을 부과한 것이다.

## 유한-특이 사상

Kolyvagin 소수 $\ell$ 에서 두 조각이 모두 $T$ 와 동형이므로, 그 동형을 합성해 표준 동형

$$
\phi_\ell^{\mathrm{fs}}\colon H^1_{\mathrm{f}}(K_\ell,T)\ \xrightarrow{\ \sim\ }\ H^1_{\mathrm{tr}}(K_\ell,T)
$$

를 얻는다. $\ell\equiv1\ (\mathrm{mod}\ p^k)$ 를 요구한 것은 이 동형을 얻기 위해서다. 이것이 **유한-특이 사상**이고, 자취 정합성이 번역되어 앉는 자리다.

## Kolyvagin 계

$$
\mathbf{KS}(T,\mathcal F,\mathcal P)=\Big\lbrace\kappa=(\kappa_n)_{n\in\mathcal N}\ :\ \kappa_n\in H^1_{\mathcal F(n)}(K,T),\ \ \phi_\ell^{\mathrm{fs}}\big(\mathrm{loc}_\ell(\kappa_n)\big)=\mathrm{loc}_\ell(\kappa_{n\ell})\ \ (\forall\thinspace\ell\mid n\ell)\Big\rbrace
$$

여기서 $\mathcal P$ 는 허용하는 Kolyvagin 소수의 집합이다. 이것이 $R$ 가군을 이룬다. Euler 계와 달리 **대수적 원소의 탑에 대한 언급이 전혀 없다.** 남은 것은 코호몰로지와 국소 조건뿐이다.

## 핵심계수

$R=\mathbb F_p$ 인 경우(일반 $R$ 은 잔여체로 환원한다) **핵심계수**를

$$
\chi(\mathcal F):=\dim_{\mathbb F_p}H^1_{\mathcal F}(K,T)-\dim_{\mathbb F_p}H^1_{\mathcal F^*}(K,T^*)
$$

로 정의한다. 정의만 보면 대역적 양이지만, 다음 절에서 보듯 국소 데이터로 계산된다.

# 성질

## Greenberg–Wiles 공식

모든 것의 출발점은 Selmer 군의 대역 Euler 표수 공식이다.

$$
\frac{|H^1_{\mathcal F}(K,T)|}{|H^1_{\mathcal F^*}(K,T^*)|}=\frac{|H^0(K,T)|}{|H^0(K,T^*)|}\prod_{v}\frac{|H^1_{\mathcal F}(K_v,T)|}{|H^0(K_v,T)|}
$$

곱은 모든 자리에 걸치고, $v\notin\Sigma$ 에서는 항이 $1$ 이라 유한 곱이다. 증명은 [Poitou–Tate 완전열](poitou-tate.md)에 국소 Euler 표수 공식을 결합하는 것으로, 새로운 입력이 없다. 양변에 $\log_p$ 를 씌우면

$$
\chi(\mathcal F)=\sum_v\Big(\dim H^1_{\mathcal F}(K_v,T)-\dim H^0(K_v,T)\Big)+\dim H^0(K,T)-\dim H^0(K,T^*)
$$

가 된다. 우변은 전부 국소 계산이다.

## 시소 보조정리

$\mathcal F\subseteq\mathcal F'$ 가 자리 $\ell$ 하나에서만 다르다 하자. Greenberg–Wiles 를 두 구조에 적용해 나누면 다른 모든 자리의 항이 지워지고 직관 절의 항등식이 남는다.

$$
\frac{|H^1_{\mathcal F'}(K,T)|}{|H^1_{\mathcal F}(K,T)|}\cdot\frac{|H^1_{\mathcal F^*}(K,T^*)|}{|H^1_{\mathcal F'^*}(K,T^*)|}=\frac{|H^1_{\mathcal F'}(K_\ell,T)|}{|H^1_{\mathcal F}(K_\ell,T)|}
$$

두 따름결과가 중요하다.

- **완화는 $\chi$ 를 올린다.** $\ell$ 에서 불분기 조건, 곧 $\dim=\dim H^0(K_\ell,T)$ 인 조건을 전체로 넓히면 $\chi$ 가 $\dim H^1(K_\ell,T)-\dim H^1_{\mathrm{ur}}(K_\ell,T)$ 만큼 커진다. Kolyvagin 소수에서 이 값은 $\mathrm{rank}\thinspace T$ 다.
- **가로지름은 $\chi$ 를 보존한다.** $H^1_{\mathrm{f}}$ 와 $H^1_{\mathrm{tr}}$ 의 크기가 같으므로 우변이 $1$ 이다. 그러므로 모든 $n\in\mathcal N$ 에 대해 $\chi(\mathcal F(n))=\chi(\mathcal F)$ 다.

두 번째가 핵심계수를 불변량으로 만든다. Kolyvagin 계는 $\mathcal N$ 위를 돌아다니지만 시소의 기준선은 어디서나 같다.

## 자기쌍대 구조의 핵심계수는 $0$

$\mathcal F=\mathcal F^*$ 이고 $T\cong T^\ast$ 이면 좌변의 두 군이 같으므로 $\chi=0$ 이다. 국소 계산으로 확인해 보면 상쇄가 어디서 일어나는지 보인다. $K=\mathbb Q$ 와 $T=E[p]$ 와 $p\ge5$ 이고 $E[p]$ 가 기약이며 $E$ 가 $p$ 에서 좋은 환원을 갖는다 하자.

| 자리 $v$ | $\dim H^1_{\mathcal F}(\mathbb Q_v,T)$ | $\dim H^0(\mathbb Q_v,T)$ | 기여 |
| --- | --- | --- | --- |
| $\infty$ | $0$ | $1$ | $-1$ |
| $p$ | $1$ | $0$ | $+1$ |
| 나쁜 환원 $\ell$ | $\dim H^1_{\mathrm{ur}}$ | 같음 | $0$ |
| 그 밖 | $\dim H^1_{\mathrm{ur}}$ | 같음 | $0$ |

$p$ 가 홀수라 $H^1(\mathbb R,T)=0$ 이고, $\det=-1$ 이므로 복소켤레의 고유공간이 $1$ 차원씩 갈려 $\dim H^0(\mathbb R,T)=1$ 이다. 합은 $0$ 이다. 자기쌍대 구조만으로는 Kolyvagin 계가 없다.

## $p$ 에서 완화하면 $1$ 이 된다

위 표에서 $v=p$ 의 조건만 $H^1(\mathbb Q_p,T)$ 전체로 바꾸면 $\dim H^1(\mathbb Q_p,E[p])=2$ 이므로 기여가 $+2$ 가 되고

$$
\chi(\mathcal F^{p})=-1+2=1
$$

이다. 실수 자리의 $-1$ 이 지워지지 않고 남아 균형을 한 칸 어긋나게 만드는 것이 요점이다. 이 완화된 구조의 쌍대는 $p$ 에서 엄격한 구조이므로, 여기서 얻는 결론은 **엄격 Selmer 군의 정확한 크기**다. 이것이 [Kato](euler-systems.md) 의 zeta 원소가 사는 자리이기도 하다.

다음 코드는 자리별 기여를 그대로 더해 두 경우를 비교한다.

```javascript
// chi(F) = sum_v ( dim H^1_F(K_v,T) - dim H^0(K_v,T) ) + dim H^0(K,T) - dim H^0(K,T*)
// K = Q, T = E[p], p >= 5, E[p] 기약, E 는 p 에서 좋은 환원.
function coreRank(localConditions, h0Global = 0, h0GlobalDual = 0) {
  const sum = localConditions.reduce((acc, { dimF, dimH0 }) => acc + dimF - dimH0, 0);
  return sum + h0Global - h0GlobalDual;
}

const selfDual = [
  { v: 'inf', dimF: 0, dimH0: 1 }, // H^1(R,T)=0, T^{c=1} 은 1 차원
  { v: 'p', dimF: 1, dimH0: 0 }, // Bloch-Kato 유한부분
  { v: 'bad', dimF: 1, dimH0: 1 }, // 불분기: 두 차원이 같다
];
const relaxedAtP = selfDual.map((c) => (c.v === 'p' ? { ...c, dimF: 2 } : c));

console.log(coreRank(selfDual)); // 0  -> Kolyvagin 계가 없다
console.log(coreRank(relaxedAtP)); // 1  -> 자유 순위 1
```

## 주정리

Mazur–Rubin 의 결론은 세 갈래다. $T$ 가 적절한 큼직함 조건(잔여 표현의 상이 충분히 크다)을 만족한다고 하자.

- $\chi(\mathcal F)=0$ 이면 $\mathbf{KS}(T,\mathcal F,\mathcal P)=0$ 이다. 정합 조건이 너무 많아 $0$ 만 살아남는다.
- $\chi(\mathcal F)=1$ 이면 $\mathbf{KS}(T,\mathcal F,\mathcal P)$ 는 **자유 순위 $1$ 인** $R$ 가군이다.
- $\chi(\mathcal F)\ge2$ 이면 가군이 매우 크고, 원소 하나가 나머지를 결정하지 못한다.

가운데 경우가 왜 강력한지는 이렇게 읽는다. 서로 다른 Euler 계 두 개가 있어도 거기서 나온 Kolyvagin 계는 **서로 상수배**다. 그러므로 "어떤 Euler 계를 썼는가" 가 사라지고 "그 계가 $p$ 로 몇 번 나누어지는가" 만 남는다.

## Selmer 군을 정확히 읽어 내기

$\chi=1$ 이고 $\kappa$ 가 $\mathbf{KS}$ 의 생성원이라 하자. 각 $i\ge0$ 에 대해

$$
\partial_i(\kappa):=\min\lbrace\thinspace\mathrm{ord}_p(\kappa_n)\ :\ n\in\mathcal N,\ \nu(n)\le i\thinspace\rbrace
$$

로 두면($\nu(n)$ 은 $n$ 의 소인수 개수, $\mathrm{ord}\_p$ 는 $\kappa_n$ 이 $p$ 로 나누어지는 횟수), $\partial_i$ 는 감소하다가 $0$ 에서 멈추는 열이고, 그 감소 폭이 쌍대 Selmer 군 $H^1_{\mathcal F^\ast}(K,T^\ast)$ 의 초등인자를 그대로 준다. 특히 길이가

$$
\mathrm{length}_R\thinspace H^1_{\mathcal F^*}(K,T^*)=\sum_{i\ge0}\partial_i(\kappa)
$$

로 **등식**으로 나온다. Euler 계가 주던 부등식 $\mathrm{length}\le\cdots$ 가 여기서 등식이 된 것이다. 남는 것은 $\kappa$ 가 실제로 생성원인지 — 곧 $\partial_0(\kappa)$ 가 최소값인지 — 를 확인하는 문제뿐이고, 이것이 Euler 계 쪽에서 넘어오는 유일한 입력이다.

특별한 경우로 $\kappa_1\not\equiv0\ (\mathrm{mod}\ p)$ 이면 모든 $\partial_i=0$ 이라 $H^1_{\mathcal F^\ast}(K,T^\ast)=0$ 이다. Kolyvagin 의 고전적 결론 "유도류가 $p$ 로 나누어지지 않으면 Selmer 군이 죽는다" 가 이 형식에서 한 줄이 된다.

## 핵심 정점

$\chi=1$ 일 때 $\mathcal N$ 의 정점 가운데 $\dim H^1_{\mathcal F(n)}(K,T)=1$ 이고 $H^1_{\mathcal F(n)^\ast}(K,T^\ast)=0$ 인 것을 **핵심 정점**(core vertex)이라 한다. 시소가 한쪽 끝까지 기운 자리다. 핵심 정점은 항상 존재하고 그래프 안에 조밀하게 퍼져 있다는 것이 [Chebotarev](chebotarev.md) 논법으로 증명되며, 이것이 위의 구조 정리를 얻는 기술적 열쇠다. 존재성 증명의 무게가 "적당한 $\ell$ 을 고른다" 에 실려 있다는 점은 Kolyvagin 의 원래 논법과 똑같다.

# 활용

## Euler 계에서 Kolyvagin 계로

Euler 계가 주어지면 유도 연산자를 적용해 $\kappa_n$ 을 만들고, 자취 관계가 두 번째 공리로 번역된다. 곧 자연스러운 사상

$$
\lbrace\text{Euler 계}\rbrace\longrightarrow\mathbf{KS}(T,\mathcal F,\mathcal P)
$$

이 있다. 이 사상은 단사도 전사도 아니지만, $\chi=1$ 이면 치역이 자유 순위 $1$ 가군 안에 앉으므로 "어느 배수인가" 만 따지면 된다. 이론의 무게중심이 존재성에서 **정수 하나의 계산**으로 옮겨 간다.

## 순환체 주추측

$T=\mathbb Z_p(1)$ 과 순환체 단수의 Euler 계가 원형이다. 이 경우 $\chi=1$ 이 나오고 — $\mathbb Q$ 의 단수 계수가 $1$ 이라는 사실의 코호몰로지판이다 — Kolyvagin 계의 생성원이 순환체 단수가 주는 계와 상수배로 비교된다. 그 상수를 해석적 유수 공식으로 계산하면 [Iwasawa 주추측](iwasawa-main-conjecture.md)이 나온다. Rubin 의 원래 증명이 얻던 한쪽 나눔이 여기서 등식으로 강화된다.

## 타원곡선의 Selmer 군

$T=T_p(E)$ 에서 $p$ 자리를 완화한 구조가 $\chi=1$ 이고, Kato 의 zeta 원소가 그 구조의 Kolyvagin 계를 준다. 결론은 엄격 Selmer 군의 크기가 $p$ 진 $L$ 함수의 소멸 차수로 정확히 주어진다는 것이고, 이 진술이 [BSD](birch-swinnerton-dyer.md) 의 $p$ 진 판본이다. Heegner 점 쪽 입력과 합쳐지면 해석적 순위 $\le1$ 에서 $\text{Ш}$ 의 $p$ 부분 위수까지 통제된다.

## 이분 Euler 계

허수이차체 위의 반순환 상황에서는 소수를 하나 더할 때 $\chi$ 가 $0$ 과 $1$ 을 **번갈아** 오간다. 자리 $\ell$ 이 분해하느냐 관성이냐에 따라 국소 조건의 차원이 달라지기 때문이다. Howard 는 이 경우를 따로 다루어 **이분 Euler 계**라 불렀고, $\chi=0$ 인 정점에는 코호몰로지 류 대신 수(모듈러 형식의 특수값)를 얹는다. Gross–Zagier 와 Kolyvagin 을 하나의 격자 위에 올려 놓는 그림이다.

## 왜 이 형식화가 퍼졌는가

Kolyvagin 계의 문법에는 타원곡선도, 모듈러 곡선도, 순환체도 들어 있지 않다. 필요한 것은 Galois 가군 하나와 국소 조건의 지정뿐이다. 그래서 [변형환](deformation-rings.md)의 접공간 계산, 고차 무게 모듈러 형식의 Bloch–Kato 추측, $p$ 진 $L$ 함수와 Selmer 군의 비교가 전부 같은 언어로 진술된다. "국소 조건을 하나 바꾸면 Selmer 군이 얼마나 변하는가" 라는 물음이 공통의 기술적 심장이고, 그 답을 담은 정수가 핵심계수다.

[^1]: B. Mazur, K. Rubin, *Kolyvagin Systems*, Memoirs AMS **168** (2004) 가 핵심계수와 구조 정리의 원전이다. Greenberg–Wiles 공식은 A. Wiles, *Modular elliptic curves and Fermat's Last Theorem*, Ann. of Math. **141** (1995) 의 부록과 R. Greenberg 의 계산에서 왔고, 교과서 서술은 K. Rubin, *Euler Systems* (Annals of Math. Studies 147, 2000) 의 1 장에 있다. 이분 Euler 계는 B. Howard, *Bipartite Euler systems*, J. reine angew. Math. **597** (2006). 본문의 자리별 차원 표와 코드는 직접 확인한 것이다.

# 연관 문서

## 선수지식

- [Euler 계와 Kolyvagin 유도류](euler-systems.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #theorem #algebra
