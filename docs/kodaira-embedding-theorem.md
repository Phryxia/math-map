# Kodaira 매장 정리

# 개요

**Kodaira 매장 정리(Kodaira embedding theorem)** 는 콤팩트 복소다양체가 양의 선다발을 가지면 사영공간 안에 다항식으로 정의되는 다양체로 넣을 수 있다는 정리다. 평행사변형의 마주 보는 변을 붙인 원환면 $\mathbb C/\Lambda$ 는 처음에는 격자로만 주어지고 방정식이 없다.

[타원함수](elliptic-functions.md) $\wp$ 와 $\wp'$ 을 좌표로 쓰면 이 원환면은 평면 삼차곡선 $y^2=4x^3-g\_2x-g\_3$ 이 된다. Kodaira 매장 정리는 선다발의 단면들을 좌표로 쓰는 이 방법이 언제 매장을 주는지 판정한다.

# 직관

원환면 $X=\mathbb C/\Lambda$ 에서 $0$ 에만 $k$ 차까지의 극을 허용한 타원함수들의 공간을 $V\_k$ 라 한다. [Riemann–Roch 정리](riemann-roch.md)에서 종수가 $1$ 이므로 $k\ge 1$ 이면 $\dim V\_k=k$ 다.

$k=1$ 이면 $V\_1$ 은 상수뿐이다. $k=2$ 이면 $V\_2$ 는 $1,\wp$ 로 생성되고 $z\mapsto(1:\wp(z))$ 는 사영직선으로 가는 사상이다. $\wp$ 는 짝함수라 $z$ 와 $-z$ 가 같은 점으로 가므로 이 사상은 매장이 아니다.

$k=3$ 이면 $V\_3$ 은 $1,\wp,\wp'$ 으로 생성되고, $z\mapsto(1:\wp(z):\wp'(z))$ 는 $X$ 를 사영평면의 삼차곡선과 일대일로 대응시킨다. $\wp'$ 은 홀함수라 $z$ 와 $-z$ 를 가른다. 극의 차수를 충분히 크게 허용하면 단면이 많아져 점과 접방향을 모두 가르게 된다.

# 정의

$X$ 를 콤팩트 복소다양체, $L$ 을 정칙 선다발이라 한다. $H^0(X,L)$ 의 기저 $s\_0,\dots,s\_N$ 이 모든 점에서 동시에 $0$ 이 되지 않으면 다음 사상이 정의된다.

$$
\varphi_L(x)=(s_0(x):\dots:s_N(x))\in\mathbb P^N
$$

$\varphi\_L$ 이 매장이면 $L$ 을 **매우 풍부(very ample)** 하다 하고, 어떤 거듭제곱 $L^m$ 이 매우 풍부하면 **풍부(ample)** 하다 한다. 직관 절에서 $L=\mathcal O(\lbrack 0\rbrack)$ 이면 $L^3$ 이 매우 풍부하고 $L^2$ 는 그렇지 않다.

정리. $L$ 이 양의 선다발이면 충분히 큰 모든 $m$ 에 대해 $L^m$ 은 매우 풍부하다[^1].

양의 선다발의 정의는 [Kodaira 소멸 정리](kodaira-vanishing-theorem.md)와 같다. 곡률이 양인 에르미트 계량을 갖는 선다발이다.

# 성질

## 증명의 요지

$\varphi\_{L^m}$ 이 매장이려면 서로 다른 두 점 $p$, $q$ 에 대해 $H^0(L^m)\to L^m\_p\oplus L^m\_q$ 가 전사이고, 각 점 $p$ 에서 $H^0(L^m)$ 의 $p$ 에서 $0$ 인 단면들의 미분이 여접공간 전체를 채워야 한다.

$X$ 를 $p$ 와 $q$ 에서 [부풀림](blow-ups.md)한 $\widetilde X$ 에서 보면, 이 두 조건은 예외 인자 $E$ 를 뺀 선다발의 $H^1$ 이 $0$ 이라는 조건이 된다. $m$ 이 크면 그 선다발에서 $K\_{\widetilde X}$ 를 뺀 것이 양이므로 Kodaira 소멸 정리로 $H^1=0$ 이다[^1].

## 사영성의 판정

콤팩트 [Kähler 다양체](kahler-manifolds.md) $X$ 의 Kähler 류 $\lbrack\omega\rbrack$ 가 정수 코호몰로지류에서 오면, [Lefschetz (1,1) 정리](lefschetz-1-1-theorem.md)로 $c\_1(L)=\lbrack\omega\rbrack$ 인 선다발 $L$ 이 있고 $L$ 은 양이다. 그러므로 다음 둘이 동치다.

- $X$ 가 사영공간의 닫힌 복소부분다양체와 동형이다.
- $X$ 에 정수 류를 갖는 Kähler 형식이 있다.

[Chow 정리](chow-theorem.md)에 따르면 사영공간의 닫힌 복소부분다양체는 다항식의 공통 영점이므로, 이런 $X$ 는 사영 대수다양체다.

## 곡선

종수 $g$ 인 곡선에서 차수 $d\ge 2g+1$ 인 선다발은 매우 풍부하다. Riemann–Roch 정리와 [Serre 쌍대성](serre-duality.md)으로 모든 $p$, $q$ 에서 $h^0(L-p-q)=h^0(L)-2$ 가 성립하고, 이것이 두 점과 접방향을 가르는 조건이다. 직관 절의 $g=1$, $d=3$ 이 이 경우다.

## 복소 원환면

$X=\mathbb C^n/\Lambda$ 가 사영 다양체일 필요충분조건은 $\mathbb C^n$ 위의 양의 정부호 에르미트 형식 $H$ 가 있어 $\mathrm{Im}\thinspace H$ 가 $\Lambda$ 위에서 정숫값을 갖는 것이다(Riemann 조건, Riemann conditions)[^2]. $n=1$ 이면 넓이 형식이 이 조건을 만족하므로 모든 원환면이 사영 다양체다. $n\ge 2$ 이면 격자를 일반적으로 고를 때 조건을 만족하는 $H$ 가 없다.

# 활용

- [아벨 다양체](abelian-varieties.md). 사영 다양체인 복소 원환면이 아벨 다양체이고, Riemann 조건의 $H$ 가 편극이다. 풍부한 $L$ 에 대해 $L^3$ 이 매우 풍부하다는 Lefschetz 정리가 이 정리의 원환면 판본이다.
- [K3 곡면](k3-surfaces.md). K3 곡면은 모두 Kähler 이지만, 사영 다양체인 것은 Picard 격자에 자기교차수가 양인 류가 있는 것뿐이다.
[^1]: P. Griffiths and J. Harris, *Principles of Algebraic Geometry*, Wiley, 1978, Chapter 1, Section 4.

[^2]: C. Birkenhake and H. Lange, *Complex Abelian Varieties*, 2nd ed., Grundlehren der mathematischen Wissenschaften 302, Springer, 2004, Chapter 4.

# 연관 문서

## 선수지식

- [Kodaira 소멸 정리](kodaira-vanishing-theorem.md)
- [Lefschetz (1,1) 정리](lefschetz-1-1-theorem.md)

## 더 알아보기

- [풍부한 선다발의 수치 판정법](ampleness-criteria.md)
- [Fano 다양체](fano-varieties.md)

#complex_analysis #algebra #differential_geometry #theorem
