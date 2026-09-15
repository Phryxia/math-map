# Weil 표현과 theta 대응

# 개요

[theta 급수](theta-functions.md)가 왜 모듈러 형식인지 묻는 방법은 두 가지다. 하나는 Poisson 합 공식으로 $\theta(-1/\tau)=\sqrt{-i\tau}\,\theta(\tau)$ 를 직접 계산하는 것이고, 다른 하나는 이렇게 묻는 것이다. **무엇이 이 변환을 일으키는 군이고, theta 급수는 그 군의 어떤 표현에서 오는가.**

답은 **Weil 표현**이다. 심플렉틱 공간 $W$ 에서 Heisenberg 군 $H(W)$ 를 만들고 중심 지표 $\psi$ 를 고정하면, Stone–von Neumann 정리가 그런 기약 유니터리 표현이 **정확히 하나**라고 말한다. 그런데 $\mathrm{Sp}(W)$ 가 $H(W)$ 에 중심을 고정하며 작용하므로, 유일성에 의해 $\mathrm{Sp}(W)$ 의 모든 원소가 그 표현을 자기 자신으로 옮긴다. 자동으로 사영표현이 생긴다.

$$
\mathrm{Sp}(W)\longrightarrow \mathrm{PGL}(\mathcal S)
$$

이 사영표현은 2 겹 덮개 $\mathrm{Mp}(W)$ 로 올라가야 진짜 표현이 되고, 그것이 Weil 표현 $\omega_\psi$ 다. 2 겹이 필요하다는 사실이 **반정수 무게 모듈러 형식**의 출처다. theta 급수는 $\omega_\psi$ 안의 자연스러운 불변 범함수가 주는 자기동형 형식이고, 모듈러성은 더 이상 계산의 결과가 아니라 군론의 결과가 된다.

여기서 한 걸음 더 나가면 **theta 대응**이 된다. $\mathrm{Sp}$ 안의 두 부분군이 서로의 중심화군일 때(쌍대쌍), $\omega_\psi$ 를 그 곱으로 제한하면 두 군의 표현 사이의 사전이 생긴다. Shimura 대응과 Jacquet–Langlands 대응의 여러 사례가 이 사전의 특수한 경우다.

# 직관

## 유일성이 대칭을 낳는다

논법 자체가 이 문서에서 가장 중요하다. 어떤 대상이 **유일하다**는 것을 알면, 그 대상을 보존하는 모든 변환이 자동으로 그 위에 작용한다. 유일하므로 옮겨간 곳이 원래 자리일 수밖에 없기 때문이다.

$$
\rho_\psi\circ g\ \cong\ \rho_\psi
\quad\Longrightarrow\quad
\exists\,\omega(g)\in\mathrm{GL}(\mathcal S)\ \text{ with }\ \rho_\psi(g\cdot h)=\omega(g)\,\rho_\psi(h)\,\omega(g)^{-1}
$$

Schur 보조정리에 의해 $\omega(g)$ 는 스칼라 차이로 결정되고, 그래서 $\omega$ 는 표현이 아니라 사영표현이다. [Whittaker 모형의 유일성](whittaker-models.md)이 전역 적분의 Euler 곱 분해를 낳았던 것과 같은 요령이고, 유일성 정리를 **구조를 뽑아내는 도구**로 쓰는 전형적인 방식이다.

## 왜 2 겹인가

사영표현을 진짜 표현으로 올리려면 코사이클을 없애야 하는데, $\mathrm{Sp}$ 에서는 없어지지 않는다. 가장 손에 잡히는 증거가 Fourier 변환이다. $\mathrm{SL}_2$ 의 원소

$$
w=\begin{pmatrix}0&1\\-1&0\end{pmatrix}
$$

에 대응하는 연산자가 Fourier 변환인데, $w^2=-I$ 이고 $-I$ 는 $\varphi(x)\mapsto\varphi(-x)$ 로 작용해야 한다. 그런데 Fourier 변환의 제곱이 정확히 그것이 되려면 정규화 상수가 필요하고, 그 상수는 Gauss 적분의 **제곱근**이라 부호가 모호하다.

$$
\int_{\mathbb R}e^{-\pi i x^2}\,dx=e^{-\pi i/4}
$$

이 $e^{-\pi i/4}$ 가 Weil 지표라 불리는 8 차 근이고, 제곱근의 가지 선택이 2 겹 덮개를 만든다. 실 Lie 군 수준에서 보면 $\mathrm{SL}_2(\mathbb R)$ 의 기본군이 $\mathbb Z$ 라 덮개가 존재할 여지가 있다는 것과 같은 말이다. 그리고 이 2 겹 때문에 무게가 반정수가 된다. **반정수 무게 형식은 메타플렉틱군의 형식이다.**

## theta 급수는 격자에서 온 불변 벡터

아델 위에서 $\omega_\psi$ 는 Schwartz 공간 $\mathcal S(\mathbb A^n)$ 에 작용한다. 여기에 가장 단순한 범함수를 얹는다.

$$
\theta:\mathcal S(\mathbb A^n)\to\mathbb C,\qquad
\theta(\varphi)=\sum_{x\in F^n}\varphi(x)
$$

유리점에서 값을 모두 더하는 것뿐이다. 그런데 [Poisson 합 공식](poisson-summation.md)이 정확히 **이 범함수가 $\mathrm{Sp}(F)$ 의 작용에 불변**이라고 말한다. 불변 범함수가 있으면 자기동형 형식이 나온다.

$$
\Theta_\varphi(g)=\theta\bigl(\omega_\psi(g)\varphi\bigr)
$$

이 함수는 정의상 $\mathrm{Sp}(F)$ 에 대해 왼쪽 불변이다. 고전적인 $\sum e^{\pi i n^2\tau}$ 는 $\varphi$ 를 Gauss 함수로 잡았을 때의 $\Theta_\varphi$ 다. 모듈러 변환식이 Poisson 합의 결과가 아니라 **군의 정의로부터 공짜로** 나오는 셈이다.

# 정의

## Heisenberg 군

$(W,\langle\cdot,\cdot\rangle)$ 을 체 $F$ 위의 심플렉틱 공간이라 하자. **Heisenberg 군**은 집합으로 $H(W)=W\times F$ 이고 곱은 다음과 같다.

$$
(w,t)\cdot(w',t')=\Bigl(w+w',\ t+t'+\tfrac12\langle w,w'\rangle\Bigr)
$$

중심은 $\{0\}\times F$ 이고, 교환자가 $[(w,0),(w',0)]=(0,\langle w,w'\rangle)$ 이라 심플렉틱 형식이 그대로 군의 비가환성이 된다. 양자역학의 정준교환관계 $[\hat q,\hat p]=i\hbar$ 가 이 군의 Lie 대수 판본이다.

## Stone–von Neumann 정리

비자명 지표 $\psi:F\to\mathbb C^\times$ 를 고정하자. 중심 위에서 $\psi$ 로 작용하는 $H(W)$ 의 기약 유니터리 표현은 유니터리 동형 차이로 **유일하다**. 구체적 모형은 극대 등방부분공간 $X\subset W$ 를 잡아 만든 **Schrödinger 모형** $\mathcal S(X)$ 이고, $W=X\oplus Y$ 에 대해

$$
\rho_\psi(x,0)\varphi(u)=\varphi(u+x),\qquad
\rho_\psi(y,0)\varphi(u)=\psi\bigl(\langle u,y\rangle\bigr)\varphi(u),\qquad
\rho_\psi(0,t)=\psi(t)\cdot\mathrm{id}
$$

로 준다. 평행이동과 지표 곱, 그리고 중심의 스칼라. 이것이 전부다.

## Weil 표현

$\mathrm{Sp}(W)$ 는 $H(W)$ 에 $g\cdot(w,t)=(gw,t)$ 로 작용하고 중심을 고정한다. 유일성에 의해 사영표현이 생기고, 그 코사이클이 2 겹 덮개 $\mathrm{Mp}(W)\to\mathrm{Sp}(W)$ 위에서 자명해진다. 이 덮개 위의 표현 $\omega_\psi$ 가 **Weil 표현**이다.

$\mathrm{SL}_2$ 에서 생성원의 작용을 적으면 다음과 같다.

$$
\omega_\psi\!\begin{pmatrix}a&0\\0&a^{-1}\end{pmatrix}\varphi(x)=\chi(a)\,|a|^{1/2}\varphi(ax),
\qquad
\omega_\psi\!\begin{pmatrix}1&b\\0&1\end{pmatrix}\varphi(x)=\psi\!\left(\tfrac{b x^2}{2}\right)\varphi(x)
$$

$$
\omega_\psi(w)\varphi=\gamma_\psi\cdot\widehat\varphi
$$

$\gamma_\psi$ 가 Weil 지표이고 여기에만 제곱근의 모호함이 들어 있다. 나머지 두 생성원의 작용은 모호함이 없다.

## 쌍대쌍과 theta 올림

이차공간 $V$ 와 심플렉틱 공간 $W$ 를 놓으면 $V\otimes W$ 가 심플렉틱 공간이고

$$
\bigl(O(V),\ \mathrm{Sp}(W)\bigr)\subset\mathrm{Sp}(V\otimes W)
$$

는 서로가 서로의 중심화군이다. 이런 쌍을 **축소 쌍대쌍**이라 한다. $\omega_\psi$ 를 이 곱으로 제한한 뒤 한쪽 군의 자기동형 형식과 적분하면 다른 쪽의 형식이 나온다.

$$
\theta(f)(h)=\int_{G(F)\backslash G(\mathbb A)}\Theta_\varphi(g,h)\,\overline{f(g)}\,dg
$$

이 사상이 **theta 올림**이다.

# 성질

## theta 변환식의 검산

가장 단순한 경우를 수치로 확인해 두면 뒤의 논의가 구체적으로 보인다. $\tau=it$ 로 놓으면 변환식 $\theta(-1/\tau)=\sqrt{-i\tau}\,\theta(\tau)$ 는 실수만 남는다.

```javascript
// theta3(it) = sum_{n in Z} exp(-pi n^2 t)
function theta3(t) {
  let s = 1
  for (let n = 1; n <= 200; n++) s += 2 * Math.exp(-Math.PI * n * n * t)
  return s
}

for (const t of [0.5, 1, 2, 3.7])
  console.log(t, theta3(1 / t).toFixed(10), (Math.sqrt(t) * theta3(t)).toFixed(10))
// 0.5 1.0037348855 1.0037348855
// 1   1.0864348112 1.0864348112
// 2   1.4194954881 1.4194954881
// 3.7 1.9235728363 1.9235728363
```

$\sqrt t$ 가 붙는다는 것이 무게 $1/2$ 라는 뜻이고, 제곱근이 있다는 것이 2 겹 덮개의 흔적이다. $t$ 를 순허수 축 바깥으로 움직이면 이 제곱근의 가지를 어떻게 고를지가 문제가 되고, 그 선택이 곧 $\mathrm{Mp}$ 의 원소를 고르는 일이다.

## Howe 쌍대성

쌍대쌍 $(G,H)$ 에 대해 $\omega_\psi|_{G\times H}$ 를 분해하면, $G$ 의 기약표현 $\pi$ 가 나타날 때 그와 짝지어지는 $H$ 의 기약표현이 **유일하게** 결정된다.

$$
\omega_\psi\big|_{G\times H}\ \rightsquigarrow\ \pi\ \longleftrightarrow\ \theta(\pi)
$$

중복도 1 이 여기서도 핵심이다. Howe 가 이를 예측했고 비아르키메데스 홀수 잔여특성에서 Waldspurger 가, 아르키메데스 자리에서 Howe 자신이 증명했다.[^1] 두 군의 표현론을 잇는 **사전**이 생긴다는 점에서 Langlands 함자성의 구체적 사례로 볼 수 있다.

## Shimura 대응

쌍대쌍 $\bigl(\mathrm{Mp}_2,\mathrm{PGL}_2\bigr)$ 가 주는 올림이 고전적 Shimura 대응이다. 무게 $k+1/2$ 의 형식과 무게 $2k$ 의 형식이 대응하고, Hecke 고윳값이 일치한다. [Waldspurger 정리](waldspurger-formula.md)가 반정수 무게 계수와 토릭 주기라는 두 얼굴을 갖는 이유가 바로 이 대응이다. 두 얼굴은 같은 Weil 표현을 서로 다른 쪽에서 본 것이다.

## Siegel–Weil 공식

theta 급수를 $O(V)$ 방향으로 적분하면 Eisenstein 급수가 나온다.

$$
\int_{O(V)(F)\backslash O(V)(\mathbb A)}\Theta_\varphi(g,h)\,dh
\ =\ E(g,\varphi)
$$

좌변은 이차형식의 표현수를 담고 우변은 국소 밀도의 곱으로 계산된다. 이차형식 표현론의 **국소-전역 원리를 양적으로** 만든 공식이며, [Rankin–Selberg 적분](rankin-selberg.md)이 Eisenstein 급수를 쓰는 것과 마주 보는 구조다.

## GGP 의 Fourier–Jacobi 경우

[Gan–Gross–Prasad 추측](gan-gross-prasad.md)에서 여차원이 짝수인 경우에는 중복도를 잴 때 $\omega_\psi$ 를 함께 텐서해야 했다. 그 이유가 여기서 설명된다. 여차원이 짝수면 쌍 $(G_{n},G_n)$ 사이에 지표만으로는 메울 수 없는 자리가 남고, Heisenberg 군과 Weil 표현이 그 자리를 채운다. Bessel 경우의 지표 $\nu$ 가 하던 일을 $\omega_\psi$ 가 대신한다.

# 활용

## 이차형식의 표현수

$\theta^k$ 의 계수가 $k$ 개의 제곱수 합으로 $n$ 을 적는 방법의 수다. Weil 표현이 보장하는 모듈러성 덕분에 이 급수는 유한차원 공간에 놓이고, Eisenstein 부분과 첨점 부분으로 쪼개진다. 앞쪽이 주항을, 뒤쪽이 오차항을 준다. $k=4$ 에서는 첨점 부분이 아예 없어 공식이 정확해진다.

```javascript
// theta3^4 의 계수와 Jacobi 의 네 제곱수 정리 r_4(n) = 8 * (4 로 나뉘지 않는 약수의 합)
function r4(N) {
  const th = new Array(N + 1).fill(0)
  const K = Math.floor(Math.sqrt(N))
  for (let n = -K; n <= K; n++) th[n * n] += 1
  const conv = (a, b) => {
    const c = new Array(N + 1).fill(0)
    for (let i = 0; i <= N; i++) if (a[i]) for (let j = 0; i + j <= N; j++) c[i + j] += a[i] * b[j]
    return c
  }
  return conv(conv(th, th), conv(th, th))
}

const R = r4(20)
const sig = (n) => { let s = 0; for (let d = 1; d <= n; d++) if (n % d === 0 && d % 4) s += d; return s }
for (let n = 1; n <= 8; n++) console.log(n, R[n], 8 * sig(n))
// 1 8 8      5 48 48
// 2 24 24    6 96 96
// 3 32 32    7 64 64
// 4 24 24    8 24 24
```

Jacobi 의 네 제곱수 정리가 "무게 2 의 Eisenstein 급수 공간이 1 차원"이라는 사실 하나로 설명된다. 계수를 비교하는 일 자체는 초등적이지만, 왜 그런 닫힌 공식이 존재하는가에 대한 답은 Weil 표현 쪽에 있다.

## 반정수 무게 형식의 공급원

반정수 무게 형식을 만드는 체계적인 방법은 사실상 theta 급수뿐이다. Weil 표현은 그것이 우연이 아님을 말한다. 반정수 무게란 메타플렉틱군의 표현이고, 메타플렉틱군의 가장 기본적인 표현이 $\omega_\psi$ 이기 때문이다. Zagier 의 Eisenstein 급수, Cohen 의 형식, Jacobi 형식이 모두 이 틀에서 나온다.

## 정준교환관계의 유일성

Stone–von Neumann 정리는 물리에서 **양자화의 유일성** 정리로 읽힌다. 위치와 운동량의 교환관계를 만족하는 연산자 쌍을 어떻게 구현하든 유니터리 동치라는 것이다. Schrödinger 표현과 Heisenberg 행렬역학이 같은 이론인 이유가 이 정리다. 그리고 메타플렉틱 표현은 **선형 정준변환의 양자화**로, 광학에서 Gauss 빔 전파를 기술하는 ABCD 행렬의 양자 판본이 정확히 $\omega_\psi$ 다. 무한차원 표현론과 물리가 같은 대상을 다른 이름으로 부르고 있는 사례다.

다만 유일성은 유한 자유도에서만 성립한다. 장론처럼 자유도가 무한하면 동치가 아닌 표현이 연속적으로 많이 생기고, 이것이 상전이와 자발적 대칭깨짐이 표현론적으로 의미를 갖는 이유다.

[^1]: R. Howe, *Transcending classical invariant theory*, J. Amer. Math. Soc. **2** (1989). Weil 표현의 원 논문은 A. Weil, *Sur certains groupes d'opérateurs unitaires*, Acta Math. **111** (1964).

# 연관 문서

## 선수지식

- [theta 급수와 Dedekind eta](theta-functions.md)
- [Peter–Weyl 정리](peter-weyl.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #group_theory #complex_analysis
