# Weierstrass–Enneper 표현

# 개요

**Weierstrass–Enneper 표현(Weierstrass–Enneper representation)** 은 비누막처럼 넓이가 국소적으로 가장 작은 곡면인 [극소곡면](minimal-surfaces.md)을 복소함수 두 개로 적는 공식이다. 두 원형 고리 사이에 걸린 비누막은 현수면이고, 그 점마다 좌표 셋을 직접 구하는 대신 지수함수로 된 쌍 $(f,g)$ 하나를 공식에 넣으면 현수면 전체가 나온다. 같은 $g$ 에 $f$ 만 $i$ 배 하면 나선 계단 모양의 나선면이 나오듯, 곡면에 대한 기하의 질문이 정칙함수와 유리형함수를 고르는 질문으로 바뀐다.

# 직관

Weierstrass–Enneper 표현은 등온 좌표로 쓴 극소곡면을 [정칙함수](holomorphic-functions.md) $f$ 와 유리형함수 $g$ 의 쌍으로 적는 공식이다. 거꾸로 조건을 만족하는 쌍마다 극소곡면이 하나 나온다.

$g$ 는 곡면의 단위법벡터를 구면에서 복소평면으로 입체사영한 것이고, 곡률과 넓이가 $f$ 와 $g$ 로 계산된다. 극소곡면에 대한 기하의 질문이 복소함수에 대한 질문으로 바뀐다.

극소곡면 문서에 따르면 등온 좌표 $(u,v)$ 로 쓴 극소곡면은 세 좌표함수 $x\_1,x\_2,x\_3$ 이 모두 [조화함수](harmonic-functions.md)다. $z=u+iv$ 로 놓고 각 좌표함수에서

$$
\varphi\_k=\frac{\partial x\_k}{\partial u}-i\frac{\partial x\_k}{\partial v}
$$

를 만든다. $x\_k$ 가 조화함수이면 $\varphi\_k$ 의 실부와 허부가 Cauchy–Riemann 방정식을 만족하므로 $\varphi\_k$ 는 $z$ 의 정칙함수다.

등온 좌표라는 조건 $\vert r\_u\vert^2=\vert r\_v\vert^2$, $r\_u\cdot r\_v=0$ 은 $\varphi\_1^2+\varphi\_2^2+\varphi\_3^2=\vert r\_u\vert^2-\vert r\_v\vert^2-2i\thinspace r\_u\cdot r\_v=0$ 과 같다. 그러면 극소곡면은 제곱합이 $0$ 인 세 정칙함수로 정해지고, 곡면은 $x\_k=\mathrm{Re}\int\varphi\_k\thinspace dz$ 로 돌아온다.

제약 $\varphi\_1^2+\varphi\_2^2+\varphi\_3^2=0$ 을 $(\varphi\_1-i\varphi\_2)(\varphi\_1+i\varphi\_2)=-\varphi\_3^2$ 으로 고쳐 쓴다. $f=\varphi\_1-i\varphi\_2$, $g=\varphi\_3/f$ 로 놓으면 $\varphi\_1+i\varphi\_2=-fg^2$ 이고, 세 함수가 두 함수 $f$, $g$ 로 제약 없이 적힌다. 이것이 Weierstrass–Enneper 표현이다.

# 정의

$D\subseteq\mathbb C$ 를 단순연결 영역, $f$ 를 $D$ 의 정칙함수, $g$ 를 $D$ 의 유리형함수라 하고 $g$ 의 위수 $m$ 인 극마다 $f$ 가 위수 $2m$ 이상의 영점을 가진다고 한다. 그러면

$$
\varphi\_1=\tfrac12 f(1-g^2),\qquad \varphi\_2=\tfrac i2 f(1+g^2),\qquad \varphi\_3=fg
$$

는 정칙이고 $\varphi\_1^2+\varphi\_2^2+\varphi\_3^2=0$ 이다. 고정점 $z\_0$ 에서

$$
x\_k(z)=\mathrm{Re}\int\_{z\_0}^{z}\varphi\_k(\zeta)\thinspace d\zeta,\qquad k=1,2,3
$$

으로 정한 $r=(x\_1,x\_2,x\_3)$ 를 $(f,g)$ 의 **Weierstrass–Enneper 표현** 이라 한다. $f$ 가 $g$ 의 극이 아닌 곳에서 $0$ 이 아니면 $r$ 은 등온 좌표로 쓴 극소곡면이다. $D$ 가 단순연결이 아니면 $\mathrm{Re}\int\varphi\_k$ 가 경로에 의존하지 않을 조건, 곧 닫힌 경로마다 $\mathrm{Re}\oint\varphi\_k=0$ 이 더 필요하다.

# 성질

## 단위법벡터와 곡률

$g$ 는 단위법벡터 사상(Gauss map) $n:D\to S^2$ 을 북극에서 입체사영한 것이다[^1].

$$
g=\frac{n\_1+in\_2}{1-n\_3}
$$

계량과 Gauss 곡률은 다음이다.

$$
ds^2=\Bigl(\tfrac12\vert f\vert(1+\vert g\vert^2)\Bigr)^2\vert dz\vert^2,\qquad K=-\left(\frac{4\vert g'\vert}{\vert f\vert(1+\vert g\vert^2)^2}\right)^2
$$

$K$ 는 $g'=0$ 인 점에서만 $0$ 이고 나머지에서 음수다. 극소곡면의 $K\le 0$ 이 이 식으로 다시 나온다.

## 예

- **Enneper 곡면.** $D=\mathbb C$, $f=1$, $g=z$ 다. 적분이 다항식이어서 $x\_1=\mathrm{Re}(z/2-z^3/6)$, $x\_2=\mathrm{Re}\bigl(i(z/2+z^3/6)\bigr)$, $x\_3=\mathrm{Re}(z^2/2)$ 이고 자기교차가 있다.
- **현수면.** $D=\mathbb C\setminus\lbrace 0\rbrace$, $f=1/z^2$, $g=z$ 다. $\varphi\_3=1/z$ 의 유수는 $1$ 이지만 $\mathrm{Re}\oint dz/z=0$ 이므로 $x\_3=\log\vert z\vert$ 는 한 값이고, $\varphi\_1$, $\varphi\_2$ 는 유수가 $0$ 이다. 결과가 축이 $x\_3$ 축인 현수면이다.
- **나선면.** $f=i/z^2$, $g=z$ 다. 현수면의 $f$ 에 $i$ 를 곱한 것이고, 이때 $\mathrm{Re}\oint\varphi\_3=\mathrm{Re}(2\pi i\cdot i)\ne 0$ 이므로 $\mathbb C\setminus\lbrace 0\rbrace$ 위에서는 한 값이 아니고 보편덮개 위에서 정의된다.

## 동반족

$f$ 를 $e^{i\theta}f$ 로 바꾸면 계량 $ds^2$ 이 $\vert f\vert$ 에만 의존하므로 바뀌지 않는다. 그래서 $\theta$ 마다 서로 국소 등거리인 극소곡면이 하나씩 생기고, 이 족을 동반족(associate family)이라 한다. $\theta=\pi/2$ 에서 현수면이 나선면으로 바뀌므로 두 곡면은 국소적으로 등거리다.

## 전곡률

**정리(Osserman).** 완비 극소곡면의 전곡률 $\int K\thinspace dA$ 가 유한이면, 곡면은 콤팩트 [Riemann 곡면](riemann-surfaces.md)에서 유한 개의 점을 뺀 것과 등각이고 $g$ 는 그 콤팩트 곡면 위의 유리형함수로 연장된다. 전곡률은 $-4\pi\deg g$ 다[^2].

$\vert K\vert\thinspace dA$ 는 단위법벡터 사상으로 당긴 구면의 넓이 요소이므로 전곡률의 절댓값은 단위법벡터 사상이 구면을 덮은 넓이다. 구면의 넓이가 $4\pi$ 이고 $g$ 가 구면을 $\deg g$ 번 덮어 정리의 값이 나온다. 현수면은 $\deg g=1$ 이어서 전곡률이 $-4\pi$ 다.

## 단위법벡터 사상이 피하는 점

**정리(Fujimoto).** 평면이 아닌 완비 극소곡면의 단위법벡터 사상은 구면의 점을 많아야 $4$ 개 피한다[^3].

평면 전체 위의 그래프로 된 극소곡면은 법벡터가 위쪽 반구에 있어 열린 집합을 피하므로 평면이다. 극소곡면의 Bernstein 정리가 이 정리에서 따라 나온다. [Scherk 곡면](scherk-surface.md)은 정확히 $4$ 점을 피하므로 상한 $4$ 는 줄일 수 없다.

# 활용

- **극소곡면의 구성.** $f$ 와 $g$ 를 골라 적분하면 극소곡면이 나오므로, 원하는 대칭과 끝(end)을 갖는 완비 극소곡면을 만드는 데 쓴다. Costa 곡면은 종수 $1$ 의 Riemann 곡면 위의 [타원함수](elliptic-functions.md)로 $g$ 를 주어 얻은 내장 극소곡면이다[^4].
- **함수론과의 대응.** 단위법벡터 사상이 피하는 점의 개수 문제는 정칙함수의 값 분포 이론, 곧 [Picard 정리](picard-theorems.md)와 Nevanlinna 이론의 기법으로 다룬다.

[^1]: R. Osserman, *A Survey of Minimal Surfaces*, Dover, 1986, §8 과 §9. 표현 공식, 단위법벡터 사상과 $g$ 의 관계, 계량과 곡률 공식.
[^2]: R. Osserman, "Global properties of minimal surfaces in E³ and Eⁿ", *Annals of Mathematics* 80 (1964), 340–364.
[^3]: H. Fujimoto, "On the number of exceptional values of the Gauss maps of minimal surfaces", *Journal of the Mathematical Society of Japan* 40 (1988), 235–247.
[^4]: C. J. Costa, "Example of a complete minimal immersion in R³ of genus one and three embedded ends", *Boletim da Sociedade Brasileira de Matemática* 15 (1984), 47–54.

# 연관 문서

## 선수지식

- [극소곡면](minimal-surfaces.md)
- [정칙함수](holomorphic-functions.md)

## 더 알아보기

- [Scherk 곡면](scherk-surface.md)

#differential_geometry #complex_analysis
