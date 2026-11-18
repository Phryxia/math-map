# 면적분

# 개요

**면적분(surface integral)** 은 공간의 곡면 위에서 각 점에 정해진 양을 넓이에 맞춰 더한 값이다. 반지름 $1$ 인 반구 모양 지붕을 칠할 페인트의 양은 지붕의 넓이로 정해지는데, 지붕을 바닥에 비춘 원판의 넓이 $\pi$ 는 기울어진 부분을 작게 세므로 답이 아니다. 면적분은 곡면을 두 변수 $(u,v)$ 로 매개화하고, 매개변수의 작은 직사각형이 곡면에서 차지하는 넓이를 배율로 곱해 평면의 [중적분](multiple-integral.md)으로 계산한다.

# 직관

반구면 위의 점은 꼭대기에서 잰 각도 $\varphi$ 와 바닥에서 돈 각도 $\theta$ 로 정해진다.

$$
r(\varphi,\theta)=(\sin\varphi\cos\theta,\ \sin\varphi\sin\theta,\ \cos\varphi),\qquad 0\le\varphi\le\frac\pi2,\ 0\le\theta\le2\pi
$$

$(\varphi,\theta)$ 평면의 직사각형 $\lbrack 0,\pi/2\rbrack\times\lbrack 0,2\pi\rbrack$ 를 작은 직사각형으로 자르면, 반구면도 작은 조각으로 잘린다. 변이 $\Delta\varphi$, $\Delta\theta$ 인 직사각형의 상은 거의 평행사변형이고, 그 두 변은 $\varphi$ 만 움직인 벡터 $r_\varphi\Delta\varphi$ 와 $\theta$ 만 움직인 벡터 $r_\theta\Delta\theta$ 다. 여기서 $r_\varphi$, $r_\theta$ 는 $r$ 의 편미분이다.

$r_\varphi=(\cos\varphi\cos\theta,\cos\varphi\sin\theta,-\sin\varphi)$ 는 길이가 $1$ 이고, $r_\theta=(-\sin\varphi\sin\theta,\sin\varphi\cos\theta,0)$ 은 길이가 $\sin\varphi$ 이며, 둘은 수직이다. 그러므로 조각의 넓이는 거의 $\sin\varphi\thinspace\Delta\varphi\thinspace\Delta\theta$ 다. 꼭대기 근처($\varphi$ 가 작은 곳)의 조각은 $\theta$ 방향으로 좁고, 바닥 근처의 조각은 넓다.

조각의 넓이를 모두 더한 극한은 다음 적분이다.

$$
\int_0^{2\pi}\int_0^{\pi/2}\sin\varphi\thinspace d\varphi\thinspace d\theta=2\pi
$$

반구면의 넓이는 $2\pi$ 로, 바닥 원판의 넓이 $\pi$ 의 두 배다.

# 정의

## 매개곡면과 넓이 요소

$D$ 가 평면의 유계 영역이고 $r\colon D\to\mathbb R^3$ 이 연속미분가능하며 $r_u\times r_v\ne0$ 이면 $r$ 을 **매개곡면(parametrized surface)** 이라 한다. 여기서 $\times$ 는 [벡터곱](cross-product.md)이고, $r_u\times r_v$ 는 $r_u$ 와 $r_v$ 에 모두 수직이며 길이가 두 벡터가 만드는 평행사변형의 넓이다.

곡면 $S=r(D)$ 의 넓이는 다음이고, $dS=\vert r_u\times r_v\vert\thinspace du\thinspace dv$ 를 **넓이 요소(area element)** 라 한다[^1].

$$
\mathrm{Area}(S)=\iint_D\vert r_u\times r_v\vert\thinspace du\thinspace dv
$$

직관 절의 반구면에서 $r_\varphi\times r_\theta=\sin\varphi\thinspace r(\varphi,\theta)$ 이고, $r$ 의 길이가 $1$ 이므로 $\vert r_\varphi\times r_\theta\vert=\sin\varphi$ 다.

## 함수의 면적분

$f$ 가 $S$ 에서 연속이면 $f$ 의 $S$ 위의 면적분은 다음이다.

$$
\iint_S f\thinspace dS=\iint_D f\bigl(r(u,v)\bigr)\thinspace\vert r_u\times r_v\vert\thinspace du\thinspace dv
$$

$f=1$ 이면 넓이다. 반구 모양 껍질의 면밀도가 높이 $z$ 와 같으면 질량은 다음이다.

$$
\iint_S z\thinspace dS=\int_0^{2\pi}\int_0^{\pi/2}\cos\varphi\sin\varphi\thinspace d\varphi\thinspace d\theta=2\pi\cdot\frac12=\pi
$$

## 벡터장의 면적분

곡면의 각 점에서 단위법선 $n$ 을 연속으로 고를 수 있으면 곡면을 **향을 줄 수 있다(orientable)** 고 한다. 매개곡면에서는 $n=r_u\times r_v/\vert r_u\times r_v\vert$ 로 향을 잡는다. [벡터장](vector-fields.md) $F$ 의 면적분은 법선 성분 $F\cdot n$ 의 면적분이고, 이것을 $S$ 를 지나는 $F$ 의 **유량(flux)** 이라 한다.

$$
\iint_S F\cdot n\thinspace dS=\iint_D F\bigl(r(u,v)\bigr)\cdot(r_u\times r_v)\thinspace du\thinspace dv
$$

반구면에서 $r_\varphi\times r_\theta$ 는 바깥쪽을 향한다. 위로 곧게 흐르는 흐름 $F=(0,0,1)$ 의 유량은 $F\cdot(r_\varphi\times r_\theta)=\cos\varphi\sin\varphi$ 를 적분한 $\pi$ 이고, 바닥 원판을 지나는 유량과 같다.

# 성질

## 매개화에 대한 불변성

$\Phi\colon D'\to D$ 가 연속미분가능한 전단사이고 역도 연속미분가능하면, $\tilde r=r\circ\Phi$ 에 대해 다음이 성립한다.

$$
\tilde r_s\times\tilde r_t=\det D\Phi\cdot(r_u\times r_v)\circ\Phi
$$

[치환적분](integration-by-substitution.md)의 공식에 $\vert\det D\Phi\vert$ 가 들어 있으므로 함수의 면적분과 넓이는 매개화에 무관하다. 벡터장의 면적분은 $\det D\Phi\gt 0$ 이면 같고, $\det D\Phi\lt 0$ 이면 향이 뒤집혀 부호가 바뀐다.

## 그래프의 넓이 공식

곡면이 $z=g(x,y)$, $(x,y)\in D$ 의 그래프이면 $r(x,y)=(x,y,g(x,y))$ 로 매개화한다. 그러면 $r_x\times r_y=(-g_x,-g_y,1)$ 이고 넓이는 다음이다.

$$
\mathrm{Area}(S)=\iint_D\sqrt{1+g_x^2+g_y^2}\thinspace dx\thinspace dy
$$

근호 안의 값은 $1$ 이상이므로 그래프의 넓이는 바닥 영역 $D$ 의 넓이 이상이고, 기울기가 $0$ 인 곳에서만 같다. 위로 흐르는 흐름 $F=(0,0,1)$ 의 유량은 $F\cdot(r_x\times r_y)=1$ 을 적분한 $D$ 의 넓이다. 반구면의 유량이 바닥 원판의 넓이 $\pi$ 였던 것이 이것이다.

## 구면의 띠의 넓이

단위구면에서 높이 $z=a$ 와 $z=b$ 사이의 띠의 넓이는 $2\pi(b-a)$ 이다. 띠는 $\cos\varphi$ 가 $a$ 와 $b$ 사이인 부분이므로 넓이는 $2\pi\int\sin\varphi\thinspace d\varphi$ 이고, 이 적분은 $\cos\varphi$ 의 변화량 $b-a$ 다. 띠의 넓이는 높이 차에만 의존하고, 이것을 Archimedes 의 모자 상자 정리(Archimedes' hat-box theorem)라 한다. $a=-1$, $b=1$ 이면 구면 전체의 넓이 $4\pi$ 가 나온다.

# 활용

- [발산 정리](divergence-theorem.md): 닫힌 곡면을 지나 바깥으로 나가는 유량을 안쪽 영역에서 발산을 적분한 값으로 바꾼다.
- [Kelvin–Stokes 정리](kelvin-stokes-theorem.md): 곡면을 지나는 회전(curl)의 유량을 곡면의 가장자리를 따른 [선적분](line-integral.md)으로 바꾼다.
- [극소곡면](minimal-surfaces.md): 넓이 공식을 경계가 고정된 곡면들 위의 함수로 보고, 이 함수의 임계점을 찾는다. 그래프 넓이 공식의 변분에서 극소곡면 방정식이 나온다.
- [미분형식](differential-forms.md): 벡터장 $F=(P,Q,R)$ 의 유량은 2 형식 $P\thinspace dy\wedge dz+Q\thinspace dz\wedge dx+R\thinspace dx\wedge dy$ 를 곡면 위에서 적분한 것이다.
- 전자기학: Gauss 법칙(Gauss's law)은 닫힌 곡면을 지나는 전기장의 유량이 안에 든 전하량에 비례한다는 법칙이다.

[^1]: J. Stewart, *Calculus: Early Transcendentals*, 8th ed., Cengage, 2015, 16 장 6~7 절.

# 연관 문서

## 선수지식

- [치환적분](integration-by-substitution.md)
- [벡터곱](cross-product.md)

## 더 알아보기

- [발산 정리](divergence-theorem.md)

#analysis #differential_geometry
