# Hirzebruch 곡면

# 개요

**Hirzebruch 곡면(Hirzebruch surface)** 은 사영직선 위에 사영직선을 올로 얹은 곡면, 곧 사영직선 위의 사영직선 다발이다. 두 사영직선의 곱 $\mathbb{CP}^1\times\mathbb{CP}^1$ 과 한 점에서 부풀린 사영평면은 모두 사영직선으로 올을 갖는 곡면인데, 둘이 같은 곡면인지, 이런 곡면이 몇 가지 있는지 물을 수 있다.

이런 곡면은 음이 아닌 정수 $n$ 하나로 정해지는 $\mathbb F\_n$ 으로 모두 나오고, 곡면 위 곡선의 가장 작은 자기교차수 $-n$ 이 서로를 가른다.

# 직관

사영평면의 한 점 $p$ 를 부풀린 곡면 $X$ 를 본다. 점 $q\ne p$ 를 $p$ 와 $q$ 를 지나는 직선으로 보내면 $X$ 에서 $p$ 를 지나는 직선들의 모임, 곧 사영직선으로 가는 사상이 생기고 올은 그 직선들이다. 부풀림으로 생긴 사영직선 $E$ 는 올마다 한 점에서 만나는 단면이고, $E^2=-1$ 이다.

$\mathbb{CP}^1\times\mathbb{CP}^1$ 을 첫째 성분으로 사영하면 올은 $\lbrace a\rbrace\times\mathbb{CP}^1$ 이다. 단면 $\mathbb{CP}^1\times\lbrace b\rbrace$ 는 다른 $b$ 의 단면과 만나지 않으므로 자기교차수가 $0$ 이다. 이 곡면에는 자기교차수가 음인 곡선이 없다.

두 곡면 모두 사영직선 위의 사영직선 다발이지만, 자기교차수가 $-1$ 인 곡선이 한쪽에만 있으므로 동형이 아니다. 가장 음인 단면의 자기교차수가 $0$, $-1$ 이 아닌 $-n$ 인 다발도 만들 수 있다.

# 정의

$n\ge 0$ 에 대해 $\mathbb F\_n=\mathbb P(\mathcal O\oplus\mathcal O(n))$ 을 사영직선 위의 선다발 $\mathcal O\oplus\mathcal O(n)$ 의 사영화라 하고 **Hirzebruch 곡면** 이라 한다. 사영 $\pi:\mathbb F\_n\to\mathbb{CP}^1$ 의 올은 사영직선이다.

[토릭 다양체](toric-varieties.md)로는 $\mathbb Z^2$ 의 네 반직선으로 된 부채가 $\mathbb F\_n$ 을 준다.

$$
v_1=(1,0),\quad v_2=(0,1),\quad v_3=(-1,n),\quad v_4=(0,-1)
$$

이웃한 두 반직선이 만드는 $2$ 차원 뿔 넷이 아핀 평면 넷이고, 이를 붙인 것이 $\mathbb F\_n$ 이다. 반직선 $v\_i$ 마다 곡선 $D\_i$ 가 하나 있다. $D\_1$, $D\_3$ 이 올이고 $D\_2$, $D\_4$ 가 단면이다.

$\mathbb F\_0=\mathbb{CP}^1\times\mathbb{CP}^1$ 이고, $\mathbb F\_1$ 은 직관 절의 한 점에서 부풀린 사영평면이다.

# 성질

## 자기교차수

매끄러운 완비 토릭 곡면에서 반직선 $v\_i$ 의 두 이웃이 $v\_{i-1}+v\_{i+1}=a\_iv\_i$ 를 만족하면 $D\_i^2=-a\_i$ 다[^1]. $v\_2$ 의 이웃의 합은 $(1,0)+(-1,n)=n\thinspace v\_2$ 이므로 $D\_2^2=-n$ 이다. 같은 계산으로 $D\_4^2=n$, $D\_1^2=D\_3^2=0$ 이다.

$n\ge 1$ 이면 $D\_2$ 는 자기교차수가 음인 유일한 기약 곡선이다. 그러므로 $n\ne m$ 이면 $\mathbb F\_n$ 과 $\mathbb F\_m$ 은 동형이 아니다.

## Picard 군과 불변량

$C\_0=D\_2$, $f$ 를 올의 류라 하면 [Picard 군](picard-group.md)은 $C\_0$, $f$ 를 기저로 하는 $\mathbb Z^2$ 이고 교차수는 $C\_0^2=-n$, $C\_0\cdot f=1$, $f^2=0$ 이다. 표준류는 다음과 같다.

$$
K=-2C_0-(n+2)f
$$

$K^2=-4n+4(n+2)=8$ 이고, $2$ 차원 뿔이 넷이므로 Euler 표수는 $4$ 다. [Noether 공식](noether-formula.md)으로 $\chi(\mathcal O)=(8+4)/12=1$ 이다.

## 사영평면과의 관계

$v\_2$ 를 지운 부채 $(1,0),(-1,1),(0,-1)$ 은 세 벡터의 합이 $0$ 인 사영평면의 부채다. 그래서 $\mathbb F\_1$ 은 사영평면을 한 점에서 부풀린 것이고, $D\_2$ 가 부풀림으로 생긴 곡선이다.

## 기본 변환

$\mathbb F\_n$ 의 한 올 위의 점 $p$ 를 부풀린 뒤 그 올의 고유 변환을 수축하면 다른 Hirzebruch 곡면이 나온다. $p$ 가 $C\_0$ 위에 있으면 $\mathbb F\_{n+1}$, 아니면 $\mathbb F\_{n-1}$ 이다. 이것을 **기본 변환(elementary transformation)** 이라 한다. 부채로는 반직선 하나를 더하고 다른 하나를 지우는 일이다.

## 극소 유리곡면

$\mathbb F\_1$ 은 자기교차수 $-1$ 인 사영직선 $C\_0$ 를 가지므로 사영평면으로 수축된다. 다른 $\mathbb F\_n$ 과 사영평면에는 그런 곡선이 없다.

정리. 극소 유리곡면은 사영평면과 $n\ne 1$ 인 $\mathbb F\_n$ 뿐이다[^2].

## 미분동형 유형

$\mathbb F\_n$ 과 $\mathbb F\_m$ 이 미분동형일 필요충분조건은 $n\equiv m\pmod 2$ 다. $n$ 이 짝수이면 $S^2\times S^2$, 홀수이면 사영평면과 방향을 뒤집은 사영평면의 연결합이다. [교차형식](intersection-form.md)이 $n$ 이 짝수일 때 짝수이고 홀수일 때 홀수인 것이 두 유형을 가른다.

# 활용

- 곡면의 분류. [Kodaira 차원](kodaira-dimension.md)이 $-\infty$ 인 곡면의 극소 모형 가운데 유리곡면 쪽이 Hirzebruch 곡면과 사영평면이다.
- 복소구조의 변형. $\mathbb F\_2$ 는 $\mathbb F\_0$ 들의 모임의 극한으로 나타난다. 미분동형인 곡면 위에서 복소구조가 연속적으로 바뀌다 다른 곡면으로 뛰는 첫 예다.
- 토릭 기하. 부채의 계산으로 교차수와 표준류를 구하는 방법을 보이는 첫 예이고, [del Pezzo 곡면](del-pezzo-surfaces.md)의 차수 $8$ 모형 둘이 $\mathbb F\_0$ 과 $\mathbb F\_1$ 이다.

[^1]: D. Cox, J. Little and H. Schenck, *Toric Varieties*, Graduate Studies in Mathematics 124, American Mathematical Society, 2011, Chapter 10.

[^2]: A. Beauville, *Complex Algebraic Surfaces*, 2nd ed., London Mathematical Society Student Texts 34, Cambridge University Press, 1996, Chapter V.

# 연관 문서

## 선수지식

- [토릭 다양체](toric-varieties.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #differential_geometry #combinatorics
