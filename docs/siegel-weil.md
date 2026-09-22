# Siegel–Weil 공식과 이차형식의 표현수

# 개요

정수계수 이차형식 $Q$ 가 정수 $n$ 을 표현하는 방법의 수

$$
r_Q(n)=\char35{}\lbrace x\in\mathbb Z^m:\ Q(x)=n\rbrace
$$

을 묻는 문제는 Lagrange 의 네 제곱수 정리와 Gauss 의 세 제곱수 정리의 형태다. 각 $\mathbb Z_p$ 와 $\mathbb R$ 에서 해의 존재는 유한한 계산이지만, 국소 해가 전부 있어도 정수해가 없을 수 있다. 정수 위에서 국소-전역 원리가 깨지는 정도를 재는 것이 **Siegel–Weil 공식**이다.

Siegel 의 형태는 같은 **류(genus)** 에 속하는 형식들의 표현수를 자기동형군 크기로 가중 평균하면 국소 밀도의 곱과 같다는 것이다.

$$
\frac{\sum_i r_{Q_i}(n)/|\mathrm{Aut}\thinspace Q_i|}{\sum_i 1/|\mathrm{Aut}\thinspace Q_i|}
=\prod_{v}\delta_v(n)
$$

Weil 은 이를 표현론적 등식으로 다시 읽었다. [Weil 표현](weil-representation.md)에서 만든 theta 급수를 직교군 방향으로 적분하면 [Eisenstein 급수](eisenstein-series.md)가 나온다.

$$
\int_{O(V)(F)\backslash O(V)(\mathbb A)}\Theta_\varphi(g,h)\thinspace dh\ =\ E(g,\varphi)
$$

좌변은 류 평균이고 우변은 Fourier 계수가 국소 밀도의 곱으로 명시되는 대상이다. 개별 형식과 류 평균의 차이는 첨점 형식이 담당하므로, 오차항 추정이 자기동형 형식의 계수 크기 문제가 된다.

# 직관

## 류 평균

$Q$ 와 $Q'$ 가 같은 류라는 것은 모든 $\mathbb Z_p$ 와 $\mathbb R$ 위에서 동치라는 뜻이다. 국소적으로 구별되지 않지만 $\mathbb Z$ 위에서는 동치가 아닐 수 있고, 판별식 $-4\cdot 41$ 짜리 형식처럼 한 류 안에 $\mathbb Z$ 동치가 아닌 형식이 여럿 들어 있는 일이 흔하다.

그러므로 국소 데이터로 만든 $\prod_v\delta_v(n)$ 이 개별 $r_{Q_i}(n)$ 과 같을 수 없고, 국소 정보로 도달할 수 있는 최선은 류 전체의 평균이다. 가중치 $1/|\mathrm{Aut}\thinspace Q_i|$ 는 아델 군의 Haar 측도를 각 류 대표에 나눠줄 때 나오는 무게이며, [Eichler 의 질량 공식](jacquet-langlands.md)이 사원수 대수에서 쓰는 가중치와 같다.

## 주항과 오차항

무게 $m/2$ 의 [모듈러 형식](modular-forms.md) 공간은 Eisenstein 부분과 첨점 부분의 직합이다.

$$
\Theta_Q=\underbrace{E_Q}\_{\text{류에만 의존}}+\underbrace{f_Q}\_{\text{개별 형식}}
$$

Eisenstein 부분은 같은 류의 모든 형식에서 같고 그 계수가 국소 밀도의 곱이며, 첨점 부분이 형식마다 다른 몫을 담는다. 계수의 크기는

$$
E_Q\ \text{의 계수}\ \asymp n^{m/2-1},
\qquad
f_Q\ \text{의 계수}\ \ll n^{m/4+\varepsilon}
$$

이고 오른쪽은 Deligne 의 Ramanujan 추측 증명이 준다. $m\ge5$ 이면 주항의 지수가 오차항보다 크므로, $n$ 이 충분히 크고 국소 조건을 만족하면 $r_Q(n)\gt 0$ 이다. 이것이 Tartakowsky 의 정리다.

$m=3$ 에서는 두 지수가 $1/2$ 와 $3/4+\varepsilon$ 로 뒤집혀 오차가 주항을 삼킨다. 세 제곱수 문제가 네 제곱수 문제보다 어려운 원인이 이 지수 비교다.

## 쌍대쌍 관점

Siegel 의 증명은 해석적이다. Weil 은 같은 등식을 쌍대쌍의 구조로 읽었다. 쌍대쌍 $(O(V),\mathrm{Sp}(W))$ 에 대해 theta 급수 $\Theta_\varphi$ 는 두 군 모두의 함수이고, $O(V)$ 방향의 적분은 $O(V)$ 불변 벡터를 뽑는 연산이며, $\mathrm{Sp}$ 쪽에 남는 것은 퇴화 주계열에서 만든 Eisenstein 급수다.

공식의 좌변과 우변은 같은 Weil 표현을 두 방향에서 본 것이다. [Rankin–Selberg 적분](rankin-selberg.md)이 Eisenstein 급수를 넣어 $L$ 함수를 뽑는 반면, Siegel–Weil 은 적분에서 Eisenstein 급수를 얻는다.

# 정의

## 류와 질량

$L$ 을 이차형식 $Q$ 가 얹힌 격자라 하자. $L$ 의 **류**는 모든 자리에서 국소적으로 동치인 격자들의 $\mathbb Z$ 동치류 모임이고 유한개다. 류 안의 대표를 $L_1,\dots,L_h$ 라 할 때 **질량**은

$$
\mathrm{Mass}(L)=\sum_{i=1}^h\frac{1}{|\mathrm{Aut}(L_i)|}
$$

이고, Minkowski–Siegel 질량 공식이 이를 국소 밀도의 곱으로 준다. $h=1$ 이면 평균이 그 형식 자신이므로 Siegel 공식이 정확한 표현수 공식이 된다.

## 국소 밀도

각 소수 $p$ 에서

$$
\delta_p(n)=\lim_{k\to\infty}\frac{\char35{}\lbrace x\in(\mathbb Z/p^k)^m:\ Q(x)\equiv n\rbrace}{p^{k(m-1)}}
$$

로 두고, 무한 자리에서는 $Q(x)=n$ 인 실 초곡면 위의 측도로 $\delta_\infty(n)$ 을 정의한다. 곱 $\prod_v\delta_v(n)$ 을 **특이급수**라 부르며, 거의 모든 $p$ 에서 $\delta_p=1$ 이라 수렴한다.

## Siegel 정리

$m\ge4$ 이고 $Q$ 가 양정치이면

$$
\frac{1}{\mathrm{Mass}(L)}\sum_{i=1}^h\frac{r_{Q_i}(n)}{|\mathrm{Aut}(L_i)|}=\prod_v\delta_v(n)
$$

가 모든 $n\ge1$ 에 대해 성립한다.

## Weil 의 형태

$\varphi\in\mathcal S(V(\mathbb A)^k)$ 에 대해

$$
I(g,\varphi)=\int_{[O(V)]}\Theta_\varphi(g,h)\thinspace dh,
\qquad
E(g,\varphi)=\sum_{\gamma\in P(F)\backslash \mathrm{Sp}(F)}\Phi_\varphi(\gamma g)
$$

로 두면 **Weil 조건**, 곧 $\dim V$ 가 $\dim W$ 에 비해 충분히 크다는 국소 조건 아래에서 $I(g,\varphi)=E(g,\varphi)$ 다. Weil 은 수렴 영역에서만 다뤘고, Kudla–Rallis 가 해석적 접속을 통해 정칙화된 판본으로 확장했다.

# 성질

## 류가 하나인 경우

$m=8$ 의 $x_1^2+\cdots+x_8^2$ 은 류에 형식이 하나뿐이므로 평균이 답이고, 특이급수가 닫힌 공식으로 계산되어 Jacobi 의 여덟 제곱수 정리가 나온다.

```javascript
// theta3^k 의 계수
function thetaPower(k, N) {
  const K = Math.floor(Math.sqrt(N))
  let cur = new Array(N + 1).fill(0)
  for (let n = -K; n <= K; n++) cur[n * n] += 1
  const th = [...cur]
  const conv = (a, b) => {
    const c = new Array(N + 1).fill(0)
    for (let i = 0; i <= N; i++) if (a[i]) for (let j = 0; i + j <= N; j++) c[i + j] += a[i] * b[j]
    return c
  }
  for (let i = 1; i < k; i++) cur = conv(cur, th)
  return cur
}

// Jacobi: r_8(n) = 16 * sum_{d|n} (-1)^(n+d) d^3
const jacobi8 = (n) => {
  let s = 0
  for (let d = 1; d <= n; d++) if (n % d === 0) s += (-1) ** (n + d) * d ** 3
  return 16 * s
}
```

$$
r_8(1),\ldots,r_8(6)=16,\ 112,\ 448,\ 1136,\ 2016,\ 3136
$$

우변은 약수 함수만으로 적힌 산술 식이다. 닫힌 공식이 존재하는 원인은 무게 4 레벨 4 의 첨점형식 공간이 0 차원이라 theta 급수가 Eisenstein 부분만 갖는 데 있고, 그 Eisenstein 계수가 특이급수다.

## 류가 여럿인 경우

24 차원 짝수 유니모듈러 격자는 [Niemeier 격자](niemeier-lattices.md) 24 개로 분류되고 전부 같은 류에 있다. 이들의 theta 급수는 무게 12 의 모듈러 형식이고 그 공간은 2 차원이다.

$$
\Theta_L=E_{12}+c_L\thinspace\Delta
$$

$E_{12}$ 는 모든 $L$ 에서 같고 $c_L$ 만 격자마다 다르며, Siegel 공식은 $c_L$ 의 가중 평균이 0 이라고 말한다. Leech 격자는 근벡터가 없어 $\Theta$ 의 2 차 계수가 0 이고, 이 조건이 $c_L$ 을 결정한다. 류 평균은 국소 정보가 주고 개별 격자의 개성은 첨점 형식의 계수가 담는다.

## 세 변수의 어려움

$m=3$ 에서는 주항과 오차의 지수가 뒤집히므로 세 제곱수 정리 $n\ne4^a(8b+7)$ 의 증명은 이 논법으로 되지 않는다. 대신 $r_3(n)$ 이 허수이차체의 류수 $h(-4n)$ 과 연결된다는 Gauss 의 사실을 거친다. 류수의 하한은 Siegel 의 정리가 주지만 비유효라 상수를 계산할 수 없고, 세 제곱수 문제의 유효 판정이 오래 열려 있었다.

$r_3(n)$ 을 중심 $L$ 값과 잇는 것이 [Waldspurger 정리](waldspurger-formula.md)이고, 삼항 이차형식의 표현수 문제와 중심 $L$ 값 문제가 같은 문제가 된다.

## 정칙화와 확장

Kudla–Rallis 는 Eisenstein 급수를 $s$ 의 함수로 놓고 유수를 취해 Weil 조건을 크게 완화했다. 정칙화된 Siegel–Weil 공식은 theta 올림의 비소멸 판정과 [GGP](gan-gross-prasad.md)(Gan–Gross–Prasad) 계열 주기 문제의 표준 도구다. Kudla 는 좌변의 theta 적분을 Shimura 다양체 위 사이클의 생성함수로 바꾸는 **산술 Siegel–Weil 공식**을 제안했다.

# 활용

- **표현 가능성의 판정.** $m\ge4$ 인 양정치 형식에서 $Q$ 가 $n$ 을 표현하는지는 유한 개의 예외를 빼고 국소 조건으로 결정된다. 알고리즘은 특이급수로 주항을 얻고 첨점 부분의 계수 경계를 명시적으로 잡아 비교한다. **15 정리**와 **290 정리**의 증명도 이 구조 위에 있다.
- **격자 이론과 부호 이론.** 질량 공식은 주어진 판별식과 차원에서 격자의 규모를 미리 알려주므로 분류의 출발점이 된다. Niemeier 의 24 개 분류와 자기쌍대 부호의 분류가 이 계산을 썼다.
- **theta 올림의 비소멸.** 올림의 Petersson 내적을 Siegel–Weil 로 계산해 $L$ 함수의 특수값과 잇는 것이 Rallis 내적 공식이다. 올림이 살아 있는지가 $L$ 값의 비소멸로 바뀐다.

# 연관 문서

## 선수지식

- [Weil 표현과 theta 대응](weil-representation.md)
- [Eisenstein 급수](eisenstein-series.md)

## 더 알아보기

- [질량 공식과 격자의 류](mass-formula.md)

#number_theory #analysis #combinatorics
