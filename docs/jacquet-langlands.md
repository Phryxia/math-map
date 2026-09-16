# Jacquet–Langlands 대응과 사원수 대수 위의 형식

# 개요

사원수 대수 $B/F$ 의 곱셈군은 $\mathrm{GL}_2$ 의 **내부형식**이다. 대수적으로 닫힌 체 위에서는 $B\cong M_2$ 이므로 두 군이 같고 $F$ 위에서만 달라진다. **Jacquet–Langlands 대응**은 두 군의 자기동형 표현이 사실상 같은 것임을 말한다.

$$
\mathrm{JL}:\ \lbrace\text{$B^\times(\mathbb A)$ 의 자기동형 표현}\rbrace
\ \hookrightarrow\
\lbrace\text{$\mathrm{GL}_2(\mathbb A)$ 의 첨점 표현}\rbrace
$$

이 사상은 단사이고 상은 $B$ 가 분지된 자리 $\Sigma$ 의 모든 자리에서 이산계열인 첨점 표현들이다. Hecke 고윳값과 $L$ 함수가 보존된다.

양쪽 대상의 생김새는 다르다. $v\in\Sigma$ 에서 $B_v^\times$ 는 중심을 나누면 콤팩트하므로 기약 표현이 유한차원인데, 반대편 $\mathrm{GL}_2(F_v)$ 에서 같은 자리의 표현은 무한차원 이산계열이다. 1 차원 자명 표현과 무한차원 Steinberg 표현이 같은 이름표를 단다.

실용적 가치는 방향에 있다. $\Sigma\ne\varnothing$ 이면 $B^\times$ 쪽 몫공간이 콤팩트해서 첨점도 Eisenstein 급수도 연속 스펙트럼도 없고, 모든 것이 이산이며 유한차원 선형대수로 계산된다. JL 대응은 어려운 해석이 사는 세계의 문제를 유한 행렬의 문제로 옮긴다. [Waldspurger 정리](waldspurger-formula.md)가 사원수 대수 위에서 주기를 재는 것도 같은 이유다.

# 직관

## 콤팩트 몫공간

$\mathrm{GL}_2$ 의 자기동형 형식은 모듈러 곡선 위에 산다. 모듈러 곡선은 비콤팩트하고 첨점이 있어 $L^2$ 스펙트럼에 연속 부분이 생기고 Eisenstein 급수를 따로 다뤄야 한다. 첨점형식이라는 조건이 이 불편을 피하는 장치다.

$B$ 가 어딘가에서 분지되면 $B^\times(F)\backslash B^\times(\mathbb A)$ 를 중심으로 나눈 몫이 콤팩트해진다. $B$ 에 영인자가 없으므로 멱단원소도 없고, 멱단원소가 없으면 첨점을 만들 포물부분군이 없다. 같은 Hecke 고윳값을 두 세계 중 편한 쪽에서 계산할 수 있다.

## 대각합 공식의 비교

증명의 뼈대는 [Selberg 대각합 공식](selberg-trace-formula.md)의 비교다. 두 군에서 각각 대각합 공식을 쓰면 양변이 스펙트럼 쪽과 기하 쪽의 등식이 되고, 기하 쪽은 켤레류 위의 궤도적분의 합이다.

$B^\times$ 의 켤레류는 $F$ 의 이차 확대에서 오는 원소들이고 이는 $\mathrm{GL}_2$ 의 타원 켤레류와 같은 집합이다. 두 군의 기하 쪽 항이 타원 부분에서 일치하고, 남는 차이는 $\mathrm{GL}_2$ 쪽에만 있는 분열 켤레류와 연속 스펙트럼 기여뿐이다. 그 차이를 정리하면 스펙트럼 쪽 비교에서 대응이 나온다.

이 논법이 내부형식 함자성의 원형이고 [기본 보조정리와 대각합 공식의 안정화](fundamental-lemma.md)로 자란다. $\mathrm{GL}_2$ 와 $B^\times$ 에서는 켤레류 대응이 눈에 보이지만 일반 고전군에서는 그 대응을 맞추는 일이 수십 년의 문제였다.

## 지표 항등식의 부호

국소 대응에는 지표 항등식이 따라온다. 정칙 타원원소 $\gamma$ 에서

$$
\Theta_{\mathrm{JL}(\rho)}(\gamma)=-\thinspace\Theta_\rho(\gamma)
$$

로 부호가 뒤집힌다. [Vogan 꾸러미](vogan-packets.md)의 언어로는 $\mathrm{GL}_2$ 쪽 표현과 $B^\times$ 쪽 표현이 같은 매개변수를 갖는 꾸러미의 두 원소이고 성분군 $\mathbb Z/2$ 의 자명 지표와 부호 지표에 각각 대응한다. 부호 지표가 붙은 쪽이 비분열 내부형식 위에 있다는 규칙이 이 $-1$ 로 나타난다.

# 정의

## 사원수 대수와 분지 자리

$F$ 를 수체라 하고 $B$ 를 $F$ 위의 4 차원 중심 단순 대수라 하자. 각 자리에서

$$
B_v=B\otimes_FF_v\ \cong\ M_2(F_v)\ \text{ 또는 }\ D_v
$$

이고 $D_v$ 는 유일한 분할 사원수 대수다. 후자인 자리들의 집합 $\Sigma$ 는 유한하고 크기가 짝수다. 역으로 짝수 크기 유한집합마다 그것을 분지 집합으로 갖는 $B$ 가 정확히 하나 있다(Hasse–Brauer–Noether). $\Sigma=\varnothing$ 이면 $B=M_2(F)$ 다.

$F=\mathbb Q$ 에서 $\Sigma=\lbrace\infty,p\rbrace$ 인 경우가 **확정 사원수 대수**다. 무한 자리에서 분지되어 $B^\times(\mathbb R)$ 이 콤팩트 mod 중심이 된다.

## 국소 대응

$v\in\Sigma$ 에서 $B_v^\times/F_v^\times$ 는 콤팩트이므로 기약 매끄러운 표현이 모두 유한차원이다. 국소 JL 대응은 전단사

$$
\mathrm{JL}_v:\ \mathrm{Irr}\bigl(B_v^\times\bigr)\ \xrightarrow{\ \sim\ }\ \lbrace\mathrm{GL}_2(F_v)\text{ 의 이산계열}\rbrace
$$

이고 위의 지표 항등식으로 특징지어진다. 자명 표현이 Steinberg 표현에, 차원이 큰 표현이 초첨점 표현에 대응한다.

## 전역 대응

$\pi'=\otimes_v\pi'_v$ 를 $B^\times(\mathbb A)$ 의 기약 자기동형 표현이라 하자. $\mathrm{GL}_2(\mathbb A)$ 의 첨점 표현 $\pi=\otimes\pi_v$ 가 유일하게 존재해

$$
\pi_v\cong\pi'_v\ (v\notin\Sigma),
\qquad
\pi_v=\mathrm{JL}_v(\pi'_v)\ (v\in\Sigma)
$$

를 만족한다. 이 대응은 단사이고 상은 $\Sigma$ 의 모든 자리에서 이산계열인 첨점 표현 전체다. $B^\times$ 의 1 차원 표현들은 $\mathrm{GL}_2$ 의 잔여 스펙트럼에 대응하므로 첨점 쪽에서 제외한다.

# 성질

## 콤팩트성의 귀결

$\Sigma\ne\varnothing$ 이면 $B^\times(F)Z(\mathbb A)\backslash B^\times(\mathbb A)$ 가 콤팩트다. $L^2$ 가 전부 이산 스펙트럼이고 각 표현의 중복도가 유한하며, 열린 콤팩트 부분군의 불변벡터 공간이 유한차원이 되어 계산이 유한 행렬의 고윳값 문제가 된다.

확정 사원수 대수에서는 극대차수 $\mathcal O\subset B$ 의 좌이념류가 유한개이고, 그 집합 위의 함수공간에 Hecke 작용소가 **Brandt 행렬**로 작용한다.

## 류수와 종수

$\Sigma=\lbrace\infty,p\rbrace$ 인 확정 사원수 대수의 좌이념류 수 $h(p)$ 는 Eichler 의 질량 공식과 타원점 계산으로 닫힌 식이 된다. Eichler 의 정리에 의해 무게 2 레벨 $p$ 의 첨점형식 공간의 차원이 $h(p)-1$ 이고, 이는 모듈러 곡선 $X_0(p)$ 의 종수다.

```javascript
// Deuring: p 에서 분지된 확정 사원수 대수의 좌이념류 수
function classNumber(p) {
  const e4 = p % 4 === 1 ? 1 : -1   // (-4/p)
  const e3 = p % 3 === 1 ? 1 : -1   // (-3/p)
  return Math.round((p - 1) / 12 + (1 - e4) / 4 + (1 - e3) / 3)
}

// X_0(p) 의 종수 = dim S_2(Gamma_0(p))
const genus = { 11: 1, 13: 0, 17: 1, 19: 1, 23: 2, 29: 2, 31: 2, 37: 2, 41: 3, 43: 3, 47: 4 }
for (const p of Object.keys(genus).map(Number))
  console.log(p, classNumber(p), classNumber(p) - 1 === genus[p])
// 11 2 true    23 3 true    37 3 true
// 13 1 true    29 3 true    41 4 true
// 17 2 true    31 3 true    43 4 true
// 19 2 true               47 5 true
```

왼쪽은 사원수 대수의 산술이고 오른쪽은 리만 곡면의 위상이다. $-1$ 은 상수함수, 곧 JL 대응의 상에서 빠지는 1 차원 표현의 몫이다.

## 계산의 도구

레벨 $p$ 의 첨점형식 Hecke 고윳값을 $\mathrm{GL}_2$ 쪽에서 구하려면 모듈러 기호나 $q$ 전개를 다뤄야 하지만, $B^\times$ 쪽에서는 $h(p)$ 차원 공간 위의 정수 행렬을 대각화하면 된다. $p=11$ 이면 $2\times2$ 행렬이다. 이것이 Brandt 행렬 알고리즘이고, 무게가 크거나 총실수체 위의 Hilbert 모듈러 형식처럼 $q$ 전개가 어려운 경우에 쓰인다.

## Shimura 곡선

$\Sigma$ 가 무한 자리를 포함하지 않으면 $B^\times(\mathbb R)\cong\mathrm{GL}_2(\mathbb R)$ 이라 상반평면 위의 작용이 남고, 몫이 **Shimura 곡선**이 된다. 모듈러 곡선과 달리 첨점이 없는 콤팩트 곡선이다. JL 대응은 이 곡선의 Jacobi 다양체가 모듈러 곡선 쪽 Jacobi 다양체의 일부와 동종임을 함의한다. [Heegner 점](heegner-points.md) 구성이 Shimura 곡선 위에서도 작동하므로 Gross–Zagier 공식이 더 넓은 상황으로 확장된다.

# 활용

## 내부형식 함자성의 표본

Langlands 함자성은 두 군의 $L$ 군 사이 사상이 자기동형 표현의 이동을 유도한다고 예측한다. 내부형식은 $L$ 군이 같은 가장 단순한 경우라 이동이 거의 항등사상이어야 하고, JL 대응이 그것을 확인한다. 함자성에서 완전히 증명된 몇 안 되는 사례이며, 대각합 공식 비교라는 증명 방법이 이후 시도의 본보기가 되었다.

## 주기와 $L$ 값

[Waldspurger 정리](waldspurger-formula.md)는 토릭 주기를 사원수 대수 위에서 잰다. 어느 $B$ 위에서 주기가 살아남는지가 $\varepsilon$ 부호로 정해지고, 그 $B$ 위의 형식을 다시 $\mathrm{GL}_2$ 로 옮기는 것이 JL 대응이다. $L$ 함수가 양쪽에서 같으므로 주기가 말하는 중심값이 원래 형식의 중심값이 된다.

## 초특이 타원곡선과 계산 정수론

Deuring 대응에 의해 확정 사원수 대수의 극대차수는 표수 $p$ 의 초특이 타원곡선의 자기준동형환이다. 위에서 센 이념류가 초특이 곡선들과 대응하고, Brandt 행렬은 그 곡선들을 잇는 등원사상 그래프의 인접행렬이다. 모듈러 형식의 Hecke 작용소, 사원수 대수의 이념류, 초특이 곡선의 등원사상 그래프가 같은 유한 행렬로 만난다. 이 그래프는 Ramanujan 그래프이고 등원사상 기반 암호의 무대다.

# 연관 문서

## 선수지식

- [Langlands 강령](langlands-program.md)
- [Selberg 대각합 공식](selberg-trace-formula.md)

## 더 알아보기

- [Waldspurger 정리와 토릭 주기](waldspurger-formula.md)

#number_theory #group_theory #algebra
