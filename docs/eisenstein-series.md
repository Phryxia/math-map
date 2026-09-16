# Eisenstein 급수와 스펙트럼 분해

# 개요

[모듈러 형식](modular-forms.md)의 공간은 두 조각으로 나뉜다.

$$
M_k(\mathrm{SL}_2(\mathbb Z))=S_k\thickspace\oplus\thickspace\mathbb C\thinspace E_k
$$

첨점형식 $S_k$ 는 첨점에서 사라지고 Eisenstein 급수 $E_k$ 는 사라지지 않는다. Eisenstein 급수의 계수는 $\sigma_{k-1}(n)=\sum_{d\mid n}d^{k-1}$ 로 완전히 명시적이다.

그 명시성이 쓸모다. $E_4^3-E_6^2=1728\Delta$ 처럼 명시적인 것들의 조합으로 첨점형식이 만들어지고, 무게 대신 복소 매개변수 $s$ 를 넣은 실해석적 Eisenstein 급수 $E(z,s)$ 는 $\mathrm{SL}_2(\mathbb Z)\backslash\mathbb H$ 의 Laplace 작용소의 연속 스펙트럼을 전부 만든다. 이산 스펙트럼인 Maass 형식이 미지인 것과 달리 연속 쪽은 $\zeta$ 함수로 기술된다.

$$
E^*(z,s)=\xi(2s)E(z,s)\qquad\Longrightarrow\qquad E^*(z,s)=E^*(z,1-s)
$$

$\zeta$ 의 함수방정식이 상반평면 위 함수의 대칭으로 옮겨 앉는다. [Rankin–Selberg 적분](rankin-selberg.md)이 $L$ 함수의 해석적 성질을 얻는 것도 $E(z,s)$ 가 그 성질을 이미 갖고 있기 때문이다.

# 직관

## 평균화

$\Gamma$ 불변 함수를 만드는 소박한 방법은 평균 $\sum_{\gamma\in\Gamma}f(\gamma z)$ 이지만 대개 발산한다. 그래서 $f$ 를 부분군 $\Gamma_\infty$ 에 대해 이미 불변이도록 고르고 잉여류에 대해서만 합한다. $\mathrm{Im}(z)^s$ 는 $z\mapsto z+1$ 에 불변이므로

$$
E(z,s)=\sum_{\gamma\in\Gamma_\infty\backslash\Gamma}\mathrm{Im}(\gamma z)^s
$$

가 $\mathrm{Re}(s)>1$ 에서 수렴한다. 정칙 쪽도 같은 구성이며 $1$ 을 $(cz+d)^{-k}$ 라는 자기형 인자로 평균 내면 $E_k$ 가 나온다.

무엇을 평균 냈는지 알기 때문에 Fourier 계수를 끝까지 계산할 수 있다. 첨점형식은 평균의 잔재를 모두 뺀 나머지다.

## 두 개의 상수항

$E(z,s)$ 의 Fourier 전개에서 $n=0$ 항은 $y$ 의 함수이고 항이 둘이다.

$$
a_0(y,s)=y^s+\varphi(s)\thinspace y^{1-s},
\qquad
\varphi(s)=\frac{\xi(2s-1)}{\xi(2s)}
$$

$y^s$ 는 $\gamma=1$ 인 항에서 오고 둘째 항은 나머지 전부가 모인 것이다. 두 지수 $s$ 와 $1-s$ 는 Laplace 작용소의 같은 고윳값

$$
\Delta_{\mathbb H}=-y^2\Bigl(\partial_x^2+\partial_y^2\Bigr),
\qquad
\Delta_{\mathbb H}\thinspace y^s=s(1-s)\thinspace y^s
$$

을 주는 두 해이므로 상수항은 고윳값 $s(1-s)$ 의 2 차원 해공간 안에 있고 $\varphi(s)$ 는 두 해가 섞이는 비율이다.

$E(z,s)$ 와 $E(z,1-s)$ 는 같은 고윳값의 같은 종류의 함수이고 상수항에서 $s$ 와 $1-s$ 의 역할만 바뀌므로 서로 상수배여야 하며 그 상수가 $\varphi(s)$ 다. $\varphi$ 를 산란 행렬이라 부르고 $\varphi(s)\varphi(1-s)=1$ 이 유니터리성에 해당한다.

## 연속 스펙트럼

$\mathrm{SL}_2(\mathbb Z)\backslash\mathbb H$ 는 첨점이 하나 뚫려 있어 콤팩트가 아니고, 그래서 연속 스펙트럼이 생긴다.

$$
L^2(\Gamma\backslash\mathbb H)=
\underbrace{\mathbb C\cdot 1}_{\text{상수}}
\thickspace\oplus\thickspace
\underbrace{L^2_{\mathrm{cusp}}}_{\text{Maass 첨점형식}}
\thickspace\oplus\thickspace
\underbrace{\int_{\mathrm{Re}(s)=1/2}^{\oplus}\mathbb C\thinspace E(z,s)\thinspace ds}_{\text{연속 스펙트럼}}
$$

연속 부분을 만드는 것이 임계선 위의 $E(z,s)$ 다. $E(z,\tfrac12+it)$ 는 상수항이 $y^{1/2}$ 크기라 $L^2$ 에 속하지 않지만 자유 입자의 평면파처럼 일반화 고유함수 노릇을 한다. Selberg 의 스펙트럼 분해 정리가 이 분해를 서술한다.

첨점형식의 존재는 Selberg 의 대각합 공식이 무한히 많음을 보이기 전에는 자명하지 않았고, 연속 쪽은 $\zeta$ 함수로 손에 잡힌다.

## s=1 의 극과 부피

$\varphi(s)=\xi(2s-1)/\xi(2s)$ 의 분자가 $\xi$ 의 $w=1$ 극에서 오는 $s=1$ 단순극을 준다. 유수는

$$
\mathrm{Res}_{s=1}E(z,s)=\frac{1}{2\xi(2)}=\frac{3}{\pi}
=\frac1{\mathrm{vol}(\Gamma\backslash\mathbb H)}
$$

로 $z$ 에 의존하지 않는 상수함수다. 유수도 $\Gamma$ 불변이고 고윳값이 $s(1-s)\to0$ 이라 조화함수이며, 유계인 조화함수는 상수다.

이 상수가 부피의 역수라는 것이 Rankin–Selberg 방법의 급소다. $f\bar g y^k$ 에 $E(z,s)$ 를 곱해 적분한 것의 $s=1$ 유수가 Petersson 내적 $\langle f,g\rangle/\mathrm{vol}$ 이 된다.

```mermaid
graph TD
  AVG["평균화<br/>Σ_{Γ_∞\\Γ} Im(γz)^s"] --> E["E(z,s)"]
  E --> FOU["Fourier 전개"]
  FOU --> A0["상수항 y^s + φ(s) y^{1-s}"]
  FOU --> AN["n≠0 항 : K-Bessel, σ_{1-2s}(n)"]
  ZETA["ζ 의 함수방정식 ξ(s)=ξ(1-s)"] --> PHI["φ(s) = ξ(2s-1)/ξ(2s)"]
  PHI --> A0
  A0 --> FE["E*(z,s) = E*(z,1-s)"]
  PHI --> POLE["s=1 단순극<br/>유수 = 3/π = 1/vol"]
  FE --> RS["Rankin–Selberg 가<br/>이 성질을 빌려 쓴다"]
  POLE --> RS
  E --> SPEC["임계선 위의 E(z,1/2+it)<br/>= 연속 스펙트럼"]
  SPEC --> DEC["L² = 상수 ⊕ 첨점 ⊕ 연속"]
```

# 정의

## 정칙 Eisenstein 급수

짝수 $k\ge4$ 에 대해

$$
G_k(z)=\sum_{(m,n)\ne(0,0)}\frac1{(mz+n)^k},
\qquad
E_k(z)=\frac{G_k(z)}{2\zeta(k)}
$$

로 두면 $E_k\in M_k(\mathrm{SL}_2(\mathbb Z))$ 이고 $E_k(\infty)=1$ 이다. Fourier 전개는

$$
E_k(z)=1-\frac{2k}{B_k}\sum_{n\ge1}\sigma_{k-1}(n)\thinspace q^n,
\qquad q=e^{2\pi iz}
$$

이고 $B_k$ 는 Bernoulli 수다. $k=4,6$ 에서 계수가 각각 $240\sigma_3(n)$ 과 $-504\sigma_5(n)$ 이다. $k=2$ 에서는 합이 조건수렴이라 $E_2$ 가 모듈러가 아닌 준모듈러 형식이다.

## 실해석적 Eisenstein 급수

$\Gamma=\mathrm{SL}\_2(\mathbb Z)$ 로 두고 $\Gamma_\infty$ 를 $\pm\bigl(\begin{smallmatrix}1&\ast\cr 0&1\end{smallmatrix}\bigr)$ 들의 군이라 하자.

$$
E(z,s)=\sum_{\gamma\in\Gamma_\infty\backslash\Gamma}\mathrm{Im}(\gamma z)^s
=\frac12\sum_{\substack{(c,d)\in\mathbb Z^2\cr \gcd(c,d)=1}}\frac{y^s}{\lvert cz+d\rvert^{2s}}
$$

는 $\mathrm{Re}(s)>1$ 에서 절대수렴한다. 완비화는 $\xi(s)=\pi^{-s/2}\Gamma(s/2)\zeta(s)$ 를 써서 $E^\ast(z,s)=\xi(2s)E(z,s)$ 다.

$E(z,s)$ 는 $\Gamma$ 불변이고 $\Delta_{\mathbb H}E=s(1-s)E$ 를 만족하며 $L^2$ 에는 속하지 않는다.

## Fourier 전개

$$
E^*(z,s)=\xi(2s)\thinspace y^s+\xi(2s-1)\thinspace y^{1-s}
+4\sqrt y\sum_{n\ge1}n^{s-\frac12}\sigma_{1-2s}(n)\thinspace K_{s-\frac12}(2\pi ny)\cos(2\pi nx)
$$

$K_\nu$ 는 변형 Bessel 함수이고 $K_\nu=K_{-\nu}$ 다. 오른쪽 전체가 $s\mapsto1-s$ 에서 대칭이므로 함수방정식이 나오고, $\xi(2s-1)$ 의 극에서 $s=1$ 의 극이 나온다.

# 성질

## 함수방정식과 극

> $E^\ast(z,s)$ 는 $s\in\mathbb C$ 전체로 유리형 접속되고
> $$
> E^*(z,s)=E^*(z,1-s)
> $$
> 를 만족한다. 극은 $s=0$ 과 $s=1$ 의 단순극뿐이고 $\mathrm{Res}_{s=1}E(z,s)=3/\pi$ 다.[^1]

정규화하지 않은 꼴로는 $E(z,s)=\varphi(s)E(z,1-s)$ 이고 $\varphi(s)\varphi(1-s)=1$ 이다. 첨점이 여러 개이면 $\varphi$ 가 첨점 개수 크기의 행렬이 되고 그 행렬식의 극이 잉여 스펙트럼을 준다.

$\varphi(s)$ 의 0 점과 극이 $\zeta$ 의 0 점과 직결되므로 $E(z,s)$ 의 해석적 성질을 개선하는 일과 $\zeta$ 의 0 점을 이해하는 일이 같은 문제가 된다.

## 정칙 쪽의 첨점형식 구성

$M_{12}$ 는 2 차원이고 $E_4^3$ 과 $E_6^2$ 가 모두 상수항 1 을 가지므로 차가 첨점형식이다. 첨점형식의 공간이 1 차원이므로 $\Delta$ 의 상수배다.

$$
\Delta=\frac{E_4^3-E_6^2}{1728}
$$

```python
from fractions import Fraction
N = 60

def eis(k, B):                               # E_k = 1 - (2k/B_k) Σ σ_{k-1}(n) q^n
    c = [Fraction(0)]*(N+1); c[0] = Fraction(1)
    for n in range(1, N+1):
        s = sum(d**(k-1) for d in range(1, n+1) if n % d == 0)
        c[n] = -Fraction(2*k)/B * s
    return c

def mul(a, b):
    r = [Fraction(0)]*(N+1)
    for i in range(N+1):
        if a[i] == 0: continue
        for j in range(N+1-i): r[i+j] += a[i]*b[j]
    return r

E4 = eis(4, Fraction(-1, 30))                # B_4 = -1/30
E6 = eis(6, Fraction(1, 42))                 # B_6 = 1/42
lhs = [x - y for x, y in zip(mul(mul(E4, E4), E4), mul(E6, E6))]

d = [0]*(N+1); d[0] = 1                      # Δ = q ∏ (1-q^n)^24
for n in range(1, N+1):
    for _ in range(24):
        new = d[:]
        for k in range(n, N+1): new[k] -= d[k-n]
        d = new
tau = [0] + [d[k] for k in range(N)]

print("E4 계수", [int(E4[i]) for i in range(5)])
print("E6 계수", [int(E6[i]) for i in range(5)])
print("(E4^3-E6^2) == 1728·Δ :", all(lhs[n] == 1728*tau[n] for n in range(N+1)))
print("처음 6개 tau :", tau[1:7])
```

$\tau(n)$ 의 불규칙함이 $\sigma_3$ 과 $\sigma_5$ 의 조합에서 나온다. Ramanujan 의 합동 $\tau(n)\equiv\sigma_{11}(n)\pmod{691}$ 도 여기서 나오며, $691$ 은 $B_{12}$ 의 분자로 $E_{12}$ 와 $E_4^3$ 의 차이에 나타난다.

## Hecke 고유형식

$E_k$ 도 [Hecke 작용소](hecke-operators.md)의 고유형식이다. $\sigma_{k-1}$ 이 곱셈적이고

$$
T_pE_k=(1+p^{k-1})E_k
$$

이므로 Satake 매개변수가 $\alpha=p^{(k-1)/2}$ , $\beta=p^{-(k-1)/2}$ 이고 절댓값이 1 이 아니라 온도적이 아니다. 첨점형식이 Ramanujan 추측을 만족하는 것과 대조된다.

자기동형 표현 가운데 더 작은 군에서 유도된 Eisenstein 쪽은 온도성을 깨고 첨점 쪽만 온도적일 것으로 기대된다. Arthur 의 분류에서 이 구분이 $A$ 매개변수와 $L$ 매개변수의 차이다.

## 일반화

- **레벨과 첨점.** $\Gamma_0(N)$ 은 첨점이 여러 개이고 각 첨점마다 Eisenstein 급수가 있다. 산란 행렬이 진짜 행렬이 되고 그 행렬식이 스펙트럼 이론의 중심 대상이다.
- **더 높은 계수.** $\mathrm{GL}_n$ 에서는 포물 부분군 $P$ 마다, 그 Levi 위의 첨점형식 $\sigma$ 마다 Eisenstein 급수 $E(g,s;\sigma,P)$ 가 있다. Langlands 가 이들의 해석적 접속을 증명했고 그것이 $L^2(\mathrm{GL}_n(\mathbb Q)\backslash\mathrm{GL}_n(\mathbb A))$ 의 스펙트럼 분해를 준다.
- **Langlands–Shahidi 방법.** Eisenstein 급수의 상수항에 자기동형 $L$ 함수들이 인자로 나타난다. $\varphi(s)=\xi(2s-1)/\xi(2s)$ 에 $\zeta$ 가 나온 것의 일반화이고, 상수항의 해석적 성질에서 $L$ 함수의 해석적 성질을 읽는다.

# 활용

## Rankin–Selberg 의 재료

[Rankin–Selberg 적분](rankin-selberg.md)이 쓰는 것은 $E(z,s)$ 의 세 성질이다.

1. 정의가 $\Gamma_\infty\backslash\Gamma$ 위의 합이라 펼치기가 가능하다.
2. 해석적 접속과 함수방정식이 있어 $L$ 함수가 그것을 물려받는다.
3. $s=1$ 에 극이 있고 유수가 $1/\mathrm{vol}$ 이라 극 판정과 Petersson 내적이 나온다.

$L$ 함수의 해석적 성질이 $\zeta$ 의 함수방정식으로 환원된다.

## Selberg 대각합 공식

Selberg 대각합 공식은 $\Gamma\backslash\mathbb H$ 의 Laplace 스펙트럼과 닫힌 측지선의 길이를 잇는다. 좌변에는 이산 스펙트럼과 함께 연속 스펙트럼의 기여가 들어가고 그 기여가 $\varphi'/\varphi(s)$ , 곧 $\zeta'/\zeta$ 로 적힌다.

$$
-\frac1{4\pi}\int_{-\infty}^{\infty}h(t)\thinspace\frac{\varphi'}{\varphi}\Bigl(\tfrac12+it\Bigr)dt
$$

Weyl 법칙으로 Maass 첨점형식의 개수를 셀 때 이 항을 빼야 하므로 $\zeta$ 의 0 점 분포에 대한 지식이 자기동형 형식의 개수 세기에 들어온다.

## 유수와 부피

$E(z,s)$ 의 유수가 상수라는 사실에서 기본영역의 부피가 계산된다. Langlands 의 Eisenstein 급수 이론에서 잉여 스펙트럼을 계산하면 산술 군의 공변량 부피(Siegel–Weil, Langlands 부피 공식)가 나온다. $\mathrm{vol}(\mathrm{SL}_2(\mathbb Z)\backslash\mathbb H)=\pi/3$ 에 $\zeta(2)=\pi^2/6$ 가 들어 있는 것이 그 예다.

## 반복되는 구도

명시적으로 아는 대상을 만들어 두고 그것과의 관계에서 미지의 대상을 다루는 구도가 여러 분야에 나타난다. 해석적 정수론은 $\zeta$ 를 알고 $L$ 함수를 다루고, 표현론은 유도표현을 알고 초첨점 표현을 다루며, 대수기하는 사영공간을 알고 일반 다양체를 다룬다. Langlands 강령은 Eisenstein 쪽이 이미 알려졌고 첨점 쪽만 새롭다는 원리 위에 있다.

[^1]: 함수방정식과 Fourier 전개는 H. Iwaniec, *Spectral Methods of Automorphic Forms* (2 판, 2002) 3장과 6장. 스펙트럼 분해는 같은 책 4장, 또는 A. Selberg, *Harmonic analysis and discontinuous groups*, J. Indian Math. Soc. **20** (1956). 정칙 쪽과 $691$ 합동은 J.-P. Serre, *A Course in Arithmetic* (1973) 7장. $\mathrm{GL}_n$ 의 Eisenstein 급수는 R. Langlands, *On the Functional Equations Satisfied by Eisenstein Series*, Lecture Notes in Math. 544 (1976), 해설은 C. Mœglin, J.-L. Waldspurger, *Spectral Decomposition and Eisenstein Series* (1995).

# 연관 문서

## 선수지식

- [모듈러 형식](modular-forms.md)
- [소수 정리와 Riemann zeta 함수](prime-number-theorem.md)

## 더 알아보기

- [Maass 형식과 Laplace 스펙트럼](maass-forms.md)
- [Mock 모듈러 형식과 Zwegers 이론](mock-modular-forms.md)
- [Rankin–Selberg 적분](rankin-selberg.md)
- [Selberg 대각합 공식](selberg-trace-formula.md)
- [Siegel–Weil 공식과 이차형식의 표현수](siegel-weil.md)

#number_theory #complex_analysis #analysis #computation
