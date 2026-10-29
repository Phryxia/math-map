# Ado 정리

# 개요

**Ado 정리(Ado's theorem)** 는 표수 $0$ 인 체 위의 유한차원 [Lie 대수](lie-algebras.md)가 언제나 어떤 크기의 정사각행렬들의 Lie 대수로 실현된다는 정리다. Lie 대수가 괄호의 표로만 주어지면 그 원소를 [행렬](matrices.md)로 적어 계산할 수 있는지부터 알 수 없다. 딸림표현 $X\mapsto\mathrm{ad}\_X$ 는 행렬을 주지만 중심의 원소를 모두 영행렬로 보내므로 중심이 있으면 정보를 잃는다. Ado 정리는 이런 손실이 없는 유한차원 표현이 늘 있음을 보인다.

# 직관

Heisenberg 대수는 기저 $X,Y,Z$ 와 괄호 $[X,Y]=Z$, $[X,Z]=[Y,Z]=0$ 으로 주어진다. 딸림표현에서 $\mathrm{ad}\_Z$ 는 모든 기저를 $0$ 으로 보내므로 영행렬이고, $Z$ 와 $0$ 이 같은 행렬이 된다.

대각성분이 $0$ 인 $3\times3$ 상삼각 행렬을 쓰면 손실이 없다.

$$
X=\begin{pmatrix}0&1&0\cr 0&0&0\cr 0&0&0\end{pmatrix},\quad
Y=\begin{pmatrix}0&0&0\cr 0&0&1\cr 0&0&0\end{pmatrix},\quad
Z=\begin{pmatrix}0&0&1\cr 0&0&0\cr 0&0&0\end{pmatrix}
$$

$XY-YX=Z$ 이고 $Z$ 는 $X$, $Y$ 와 교환하므로 괄호가 같다. 세 행렬은 일차독립이므로 서로 다른 원소가 서로 다른 행렬로 간다. Heisenberg 대수에서는 이 행렬을 손으로 찾았고, Ado 정리는 모든 유한차원 Lie 대수에서 이런 행렬 표현이 있음을 보인다.

# 정의

Lie 대수 $\mathfrak g$ 의 표현 $\varphi:\mathfrak g\to\mathfrak{gl}(V)$ 가 단사이면 **충실한 표현(faithful representation)** 이라 한다.

**정리(Ado).** 표수 $0$ 인 체 $k$ 위의 유한차원 Lie 대수 $\mathfrak g$ 에는 유한차원 충실한 표현이 있다. 그 표현에서 $\mathfrak g$ 의 멱영 근기(nilradical), 곧 극대 멱영 아이디얼의 원소들이 멱영 행렬로 작용하게 잡을 수 있다.[^1]

# 성질

## 증명의 요지

$\mathfrak g$ 의 중심을 $\mathfrak z$ 라 하면 딸림표현의 핵이 $\mathfrak z$ 이므로, $\mathfrak z$ 위에서 단사인 유한차원 표현 $\psi$ 하나를 찾아 딸림표현과의 직합 $\mathrm{ad}\oplus\psi$ 를 잡으면 충실하다.

1. 멱영 근기 $\mathfrak n$ 위에서 시작한다. [보편포락대수](universal-enveloping-algebra.md) $U(\mathfrak n)$ 에서 차수 $m$ 이상의 단항식이 생성하는 아이디얼 $I_m$ 을 잡으면 $U(\mathfrak n)/I_m$ 은 유한차원이고, $m\ge2$ 이면 $\mathfrak n$ 이 왼쪽 곱으로 이 위에 충실하게 작용한다.
2. 근기 $\mathfrak r$ 은 $\mathfrak n$ 에 미분으로 작용하고, 그 미분들이 $U(\mathfrak n)/I_m$ 위에도 작용하도록 표현을 늘린다.
3. [Levi 분해](levi-decomposition.md) $\mathfrak g=\mathfrak s\ltimes\mathfrak r$ 의 반단순 부분 $\mathfrak s$ 도 같은 방식으로 작용을 늘려 $\mathfrak g$ 전체의 표현을 얻는다. 이 표현은 $\mathfrak z\subset\mathfrak r$ 위에서 단사다.

## 표수 p

표수 $p\gt0$ 인 체 위에서도 유한차원 Lie 대수에 유한차원 충실한 표현이 있다. 이것은 **Iwasawa 정리(Iwasawa's theorem)** 이고 증명은 다르다.[^1]

## 군에서 성립하지 않음

Lie 군에서는 같은 진술이 성립하지 않는다. $\mathrm{SL}\_2(\mathbb R)$ 의 보편덮개는 Lie 대수가 $\mathfrak{sl}\_2(\mathbb R)$ 로 행렬 Lie 대수이지만, 어떤 $\mathrm{GL}\_n(\mathbb R)$ 의 닫힌 부분군과도 동형이 아니다.

# 활용

- Lie 의 셋째 정리(Lie's third theorem), 곧 모든 유한차원 실 Lie 대수가 어떤 [Lie 군](lie-groups.md)의 Lie 대수라는 정리는 Ado 정리로 바로 증명된다. $\mathfrak g\subset\mathfrak{gl}\_n(\mathbb R)$ 로 실현하고 $\exp\mathfrak g$ 가 생성하는 $\mathrm{GL}\_n(\mathbb R)$ 의 부분군을 잡으면 그 Lie 대수가 $\mathfrak g$ 다.

[^1]: N. Jacobson, *Lie Algebras* (1962), 6 장(Ado 정리와 Iwasawa 정리).

# 연관 문서

## 선수지식

- [Levi 분해](levi-decomposition.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #group_theory #linear_algebra
