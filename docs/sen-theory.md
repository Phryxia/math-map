# Sen 이론과 Hodge–Tate 무게

# 개요

[p 진 Hodge 이론](p-adic-hodge-theory.md)의 사다리는 가장 아래 칸인 `B_{\mathrm{HT}}` 에서 시작한다. 거기서 Hodge–Tate 표현이 정의되고, 표현에 정수들의 모임인 **Hodge–Tate 무게**가 붙는다. 그런데 그 정의는 "`\mathbb C_p\otimes V` 가 `\mathbb C_p(h_i)` 들의 직합으로 쪼개진다" 는 형태라서, 주어진 표현이 그 조건을 만족하는지를 직접 확인할 방법을 주지 않는다.

Sen 이론이 그 확인을 **하나의 행렬 계산**으로 바꾼다. 순환분체 확장 `K_\infty/K` 의 Galois 군 `\Gamma\cong\mathbb Z_p^\times` 가 표현에 작용할 때, 그 작용을 무한소로 미분해서 얻는 선형작용소가 있다.

$$
\Theta=\lim_{n\to\infty}\frac{\log\bigl(\gamma^{p^n}\bigr)}{p^n\log\chi(\gamma)}
$$

이것이 **Sen 작용소**다. 군 작용이라는 무한한 자료가 행렬 하나로 압축되고, 다음이 성립한다.

> `V` 가 Hodge–Tate ⟺ `\Theta` 가 대각화 가능하고 고유값이 정수.
> 그때 그 고유값이 정확히 Hodge–Tate 무게다.

곧 **Hodge–Tate 무게는 Sen 작용소의 고유값**이다. Lie 군에서 군 작용을 Lie 대수 작용으로 미분하는 것과 같은 구도이고, 여기서는 `\Gamma` 가 `p` 진 Lie 군이라 미분이 가능하다.

이 관점의 이득이 둘이다. 판정이 선형대수가 되어 **계산할 수 있고**, Hodge–Tate 가 아닌 표현에도 `\Theta` 는 존재하므로 **일반화된 Hodge–Tate 무게**(대각화 안 될 수도, 정수가 아닐 수도 있는 고유값)라는 개념이 생긴다. 후자가 특히 중요하다. `p` 진 자기동형 형식의 족을 다룰 때 무게가 정수 아닌 `p` 진수로 변하는데, Sen 작용소는 그 상황에서도 정의된다.

# 직관

## `\mathbb C_p` 위의 표현으로 내려간다

출발점은 Tate 의 계산이다.

$$
H^0(G_K,\mathbb C_p(k))=\begin{cases}K,&k=0\\0,&k\neq0\end{cases},\qquad
H^1(G_K,\mathbb C_p)=K
$$

`k\neq0` 에서 불변식이 0 이라는 것이 `\mathbb C_p(k)` 들을 서로 구별해 준다. Hodge–Tate 조건은 `\mathbb C_p\otimes V` 가 이런 조각들로 쪼개진다는 것이고, 각 조각의 `k` 가 무게다.

문제는 `G_K` 가 너무 크다는 것이다. Sen 의 방법은 `G_K` 를 두 단계로 나누는 것이다.

$$
K\subset K_\infty=K(\mu_{p^\infty})\subset\bar K,\qquad
\Gamma=\mathrm{Gal}(K_\infty/K)\cong\mathbb Z_p^\times\ \text{(열린 부분군까지)}
$$

`H_K=\mathrm{Gal}(\bar K/K_\infty)` 쪽은 하강 정리(Ax–Sen–Tate 및 Sen 의 완비 하강)로 처리되어 `\mathbb C_p` 반선형 표현이 `K_\infty` 위의 유한차원 공간으로 내려온다. 남는 것이 `\Gamma` 의 작용뿐이고, **`\Gamma` 는 1 차원 `p` 진 Lie 군이므로 미분할 수 있다.**

## 미분이 무엇을 뜻하는가

`V=\mathbb C_p(k)` 를 보자. `\gamma\in\Gamma` 가 `\chi(\gamma)^k` 로 작용한다. 로그를 취해 `\log\chi(\gamma)` 로 나누면

$$
\Theta=\frac{\log\chi(\gamma)^k}{\log\chi(\gamma)}=k
$$

가 되어 무게가 그대로 나온다. 지수에 있던 `k` 가 미분으로 내려온 것이고, 실수 쪽에서 `t\mapsto e^{kt}` 를 미분하면 `k` 가 나오는 것과 같다. 일반의 `V` 에서는 같은 계산이 행렬로 일어나고, `\Theta` 는 `\Gamma` 작용의 **무한소 생성원**이 된다.

극한이 필요한 이유는 `\gamma` 하나로는 로그 급수가 수렴하지 않을 수 있기 때문이다. `\gamma^{p^n}` 으로 가면 항등원에 충분히 가까워져 수렴하고, 그 값을 `p^n` 으로 나누면 `n` 에 무관한 극한이 나온다.

## 대각화 가능성이 갈림길이다

`\Theta` 가 대각화 가능하면 `\mathbb C_p\otimes V` 가 고유공간으로 쪼개지고, 고유값이 정수 `k` 면 각 조각이 `\mathbb C_p(k)` 다. 곧 Hodge–Tate다.

$$
\Theta\ \text{대각화 가능 + 정수 고유값}\ \Longleftrightarrow\ \text{Hodge–Tate}
$$

깨지는 경우가 둘이다.

- **고유값이 정수가 아니다.** `\mathbb C_p(k)` 꼴이 아예 아니다. `p` 진 족에서 나타난다.
- **고유값은 정수인데 대각화가 안 된다.** 이것이 흥미롭다. 서로 같은 무게 둘이 비자명하게 엮여 있다는 뜻이고, `\Theta` 의 멱영 부분이 그 엮임을 잰다.

두 번째가 기하에서 실제로 나온다. 나쁜 곱셈 환원을 갖는 타원곡선의 Tate 가군이 `\begin{pmatrix}\chi&*\\0&1\end{pmatrix}` 꼴인데, 확장이 갈라지지 않아 Hodge–Tate가 아니다. Hodge–Tate 조건이 기하적 조건을 실제로 감지한다는 증거다.

# 정의

## 설정

`K/\mathbb Q_p` 를 유한 확장, `K_\infty=K(\mu_{p^\infty})`, `\Gamma=\mathrm{Gal}(K_\infty/K)`, `\chi:\Gamma\to\mathbb Z_p^\times` 를 순환분체 지표라 하자. `\widehat{K_\infty}` 를 `K_\infty` 의 완비화라 한다.

`W` 를 `\mathbb C_p` 위의 유한차원 반선형 `G_K` 표현이라 하자(예: `W=\mathbb C_p\otimes_{\mathbb Q_p}V`).

> **정리 (Sen).** `W` 에는 `\Gamma` 안정인 `K_\infty` 위의 유한차원 부분공간 `W_{K_\infty}` 가 있고, `\mathbb C_p\otimes_{K_\infty}W_{K_\infty}\cong W` 다. 이 하강은 충분히 큰 부분에 대해 유일하다.

## Sen 작용소

`W_{K_\infty}` 의 기저에서 `\gamma` 의 행렬을 `A(\gamma)` 라 하자. `\gamma` 가 1 에 충분히 가까우면 행렬 로그가 수렴하고

$$
\Theta=\frac{\log A(\gamma)}{\log\chi(\gamma)}
$$

가 `\gamma` 의 선택에 무관하다. 이것이 **Sen 작용소**다. 기저를 바꾸면 `\Theta` 가 켤레되므로 고유값은 불변이고, 그 고유값을 **일반화된 Hodge–Tate 무게**라 한다.

> **정리 (Sen).** `V` 가 `G_K` 의 `p` 진 표현일 때 다음이 동치다.
> 1. `V` 가 Hodge–Tate.
> 2. `\Theta` 가 대각화 가능하고 고유값이 전부 정수.
>
> 이때 고유값의 모임(중복도 포함)이 `V` 의 Hodge–Tate 무게다.

`V` 가 de Rham 이면 Hodge–Tate 이므로, `\Theta` 의 대각화 가능성은 de Rham 판정의 필요조건 검사로도 쓰인다.

# 성질

## Sen 작용소를 직접 계산한다

`\Gamma` 의 작용이 상삼각 행렬로 주어진 2 차원 예에서 `\Theta` 를 실제로 계산한다. `p` 진 로그 급수를 `\mathbb Q` 위에서 유리수 산술로 돌리고, 결과의 `p` 진 값매김을 본다.

```python
from fractions import Fraction as F

p, M = 5, 40          # 소수, 로그 급수 절단 차수

def vp(x):
    """p 진 값매김. 정확히 0 이면 None"""
    if x == 0: return None
    n, d, v = x.numerator, x.denominator, 0
    while n % p == 0: n //= p; v += 1
    while d % p == 0: d //= p; v -= 1
    return v

def mul(A, B): return [[sum(A[i][k]*B[k][j] for k in range(2)) for j in range(2)] for i in range(2)]
def add(A, B): return [[A[i][j]+B[i][j] for j in range(2)] for i in range(2)]
def scal(A, c): return [[A[i][j]*c for j in range(2)] for i in range(2)]
I2 = [[F(1), F(0)], [F(0), F(1)]]

def log_scalar(u):
    """log(1+x) = sum (-1)^{n+1} x^n / n"""
    x, s, xn = u - 1, F(0), F(1)
    for n in range(1, M+1):
        xn *= x; s += F((-1)**(n+1), n) * xn
    return s

def log_matrix(A):
    """같은 급수를 행렬에"""
    X = [[A[i][j] - I2[i][j] for j in range(2)] for i in range(2)]
    S, Xn = [[F(0)]*2 for _ in range(2)], I2
    for n in range(1, M+1):
        Xn = mul(Xn, X); S = add(S, scal(Xn, F((-1)**(n+1), n)))
    return S

u = F(1 + p*p*3)                 # chi(gamma). 1 mod p^2 이라 로그가 수렴한다
log_u = log_scalar(u)

def show(v):
    return "0 (급수 절단 밖)" if v is None or v > 60 else f"v_p = {v}"

print(f"p = {p},  chi(gamma) = {u},  급수 {M} 항까지\n")
for (a, b, c) in [(1, 0, p*p), (2, 5, p*p*7), (3, 3, p*p), (3, 3, 0)]:
    A = [[u**a, F(c)], [F(0), u**b]]                              # gamma 의 작용 행렬
    T = log_matrix(A)
    Th = [[T[i][j]/log_u for j in range(2)] for i in range(2)]    # Sen 작용소
    diagable = (a != b) or Th[0][1] == 0
    print(f"a={a}  b={b}  c={c}:")
    print(f"   Theta_11 - {a} : {show(vp(Th[0][0]-a))}      Theta_22 - {b} : {show(vp(Th[1][1]-b))}")
    print(f"   Theta_12       : {show(vp(Th[0][1]))}    Theta_21 : {show(vp(Th[1][0]))}")
    print(f"   -> 고유값 {{{a}, {b}}},  대각화 가능 {diagable},  Hodge-Tate {diagable}\n")

# p = 5,  chi(gamma) = 76,  급수 40 항까지
#
# a=1  b=0  c=25:
#    Theta_11 - 1 : 0 (급수 절단 밖)      Theta_22 - 0 : 0 (급수 절단 밖)
#    Theta_12       : v_p = 0    Theta_21 : 0 (급수 절단 밖)
#    -> 고유값 {1, 0},  대각화 가능 True,  Hodge-Tate True
#
# a=2  b=5  c=175:
#    Theta_11 - 2 : 0 (급수 절단 밖)      Theta_22 - 5 : 0 (급수 절단 밖)
#    Theta_12       : v_p = 0    Theta_21 : 0 (급수 절단 밖)
#    -> 고유값 {2, 5},  대각화 가능 True,  Hodge-Tate True
#
# a=3  b=3  c=25:
#    Theta_11 - 3 : 0 (급수 절단 밖)      Theta_22 - 3 : 0 (급수 절단 밖)
#    Theta_12       : v_p = 0    Theta_21 : 0 (급수 절단 밖)
#    -> 고유값 {3, 3},  대각화 가능 False,  Hodge-Tate False
#
# a=3  b=3  c=0:
#    Theta_11 - 3 : 0 (급수 절단 밖)      Theta_22 - 3 : 0 (급수 절단 밖)
#    Theta_12       : 0 (급수 절단 밖)    Theta_21 : 0 (급수 절단 밖)
#    -> 고유값 {3, 3},  대각화 가능 True,  Hodge-Tate True
```

읽을 것이 세 가지다.

**대각성분이 정확히 `a` 와 `b` 다.** 로그 급수를 40 항 잘라서 유리수로 계산했는데, `\Theta_{11}-a` 가 정확히 0 으로 떨어진다. 절단 밖의 항들이 실제로는 `p` 진적으로 작을 뿐 0 이 아니지만, 대각 쪽은 `\log(u^a)/\log u=a` 라는 스칼라 항등식이라 유리수 수준에서 상쇄된다. 지수에 있던 정수가 정확히 내려온다.

**비대각성분은 0 이 아니다.** `c\neq0` 이면 `\Theta_{12}` 의 값매김이 0, 곧 단위원이다. `\Theta` 가 상삼각이되 대각행렬은 아니다.

**그래서 마지막 두 줄이 갈린다.** `a\neq b` 이면 `\Theta_{12}\neq0` 이어도 고유값이 다르므로 대각화되고 Hodge–Tate다. `a=b=3` 이고 `c\neq0` 이면 `\Theta=3I+N` 에서 `N\neq0` 이 멱영이라 대각화가 불가능하고 **Hodge–Tate가 아니다.** 같은 `c\neq0` 이 `a\neq b` 일 때는 무해하고 `a=b` 일 때는 치명적이다.

이것이 `\mathbb C_p(1)` 과 `\mathbb C_p` 의 확장 이야기의 축소판이다. `H^1(G_K,\mathbb C_p)=K\neq0` 이므로 같은 무게끼리는 갈라지지 않는 확장이 있고, `\Theta` 의 멱영 부분이 그것을 정확히 잰다. 나쁜 곱셈 환원 타원곡선의 Tate 가군이 Hodge–Tate가 아닌 이유가 이 계산 한 줄에 있다.

## 무엇이 남는가

`\Theta` 는 Hodge–Tate 무게만 본다. `B_{\mathrm{dR}}` 이 보는 여과, `B_{\mathrm{cris}}` 가 보는 Frobenius 는 `\Theta` 에 나타나지 않는다. 곧 Sen 이론은 사다리의 **가장 아래 칸만 완전히 해명한다.**

이것을 위로 올리려는 것이 Sen 이론의 여러 확장이다. `B_{\mathrm{dR}}` 수준의 Sen 작용소(Fontaine), `\varphi`–`\Gamma` 가군 위에서의 Sen 작용소(Colmez, Kedlaya–Liu), 최근의 프리즘 관점(Bhatt–Lurie)이 그런 시도들이다. 공통점은 `\Gamma` 작용을 미분해 얻은 작용소가 표현의 불변량을 담는다는 착상이다.

# 활용

## `p` 진 족과 변하는 무게

고전적 무게에서 `\Theta` 의 고유값은 정수다. 그런데 Coleman–Mazur 고윳값 곡선처럼 자기동형 형식의 `p` 진 족을 다루면 무게가 `p` 진적으로 변하고, 대응하는 Galois 표현의 Hodge–Tate 무게가 더는 정수가 아니다. 이때 고전적 정의는 아무 말도 못 하지만 **`\Theta` 는 여전히 정의된다.** 일반화된 Hodge–Tate 무게가 족 위에서 해석적으로 변하고, 그 변화가 곡선 위의 함수로 읽힌다.

## de Rham 성의 검사

Fontaine–Mazur 추측 쪽 작업에서 어떤 표현이 기하에서 오는지 판정하려면 de Rham 성을 확인해야 한다. 직접 확인은 어렵지만, `\Theta` 의 고유값이 정수가 아니거나 대각화되지 않으면 **즉시 탈락**이다. 필요조건이지만 계산이 가능한 필요조건이라 실제로 쓰인다.

## 국소 Langlands 의 `p` 진 판

`\varphi`–`\Gamma` 가군의 언어에서 `\Gamma` 작용의 미분이 곧 Sen 작용소이고, 그것이 `p` 진 국소 Langlands 대응에서 무한소 자료의 역할을 한다. `\mathrm{GL}_2(\mathbb Q_p)` 의 경우 Colmez 의 대응에서 Sen 무게가 표현 쪽의 무한소 지표로 옮겨간다. 아르키메데스 자리에서 `(\mathfrak g,K)` 가군의 무한소 지표가 하던 일을 `p` 진 자리에서 `\Theta` 가 한다.

[^1]: S. Sen, *Continuous cohomology and p-adic Galois representations*, Ann. of Math. **97** (1973) 과 *Lie algebras of Galois groups arising from Hodge–Tate modules*, Ann. of Math. **97** (1973). 표준 서술은 J.-M. Fontaine, Y. Ouyang, *Theory of p-adic Galois Representations* (미출간 교재) 3 장, 또는 O. Brinon, B. Conrad, *CMI Summer School Notes on p-adic Hodge Theory* (2009) 15 장.
[^2]: Tate 의 계산은 J. Tate, *p-divisible groups*, Proc. Conf. Local Fields (1967). `\varphi`–`\Gamma` 쪽 확장은 P. Colmez, *Espaces de Banach de dimension finie*, J. Inst. Math. Jussieu **1** (2002) 및 K. Kedlaya, R. Liu 의 일련의 작업. 본문의 수치 계산은 직접 한 것이다.

# 연관 문서

## 선수지식

- [p 진 Hodge 이론과 Fontaine 주기환](p-adic-hodge-theory.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #field_theory #linear_algebra
