# 미분

미분은 작은 입력 변화에 따른 함수의 변화를 선형식으로 근사한다.

## 정의

실함수 f가 실수 a를 포함하는 열린 구간에 정의되어 있다고 하자. 실수 h는 0이 아닌 입력 증가량이다. 다음 극한이 유한한 실수로 존재하면 f는 a에서 미분 가능하고 그 값을 미분계수라 한다.

$$
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h
$$

극한은 h가 양수와 음수 양쪽에서 0에 가까워질 때 같은 값이어야 한다. 미분 가능한 각 점에 미분계수를 대응시키는 함수가 도함수다.

## 성질

오차를 r(h)로 쓰면 미분 가능성은 다음 표현과 동치다.

$$
f(a+h)=f(a)+f'(a)h+r(h),\qquad
\lim_{h\to0}\frac{r(h)}h=0
$$

증분에 대한 선형사상은 h를 f'(a)h로 보낸다. 오차는 입력 증가량보다 상대적으로 작아진다. 미분 가능하면 연속이다. 위 식에서 h가 0으로 갈 때 함수 증가량도 0으로 가기 때문이다.

예를 들어 f(x)=x²이면 차분몫은 다음과 같다.

$$
\frac{(a+h)^2-a^2}{h}=2a+h\longrightarrow2a
$$

반면 f(x)=|x|는 0에서 연속이지만 미분 가능하지 않다. 양의 h에서 차분몫은 1, 음의 h에서는 -1이다.

## 활용

접선 기울기, 순간 속도, 민감도, 최적화의 국소 방향을 계산한다. 근삿값의 정확도는 점에서 떨어진 거리와 오차항에 달려 있다. 한 점의 미분계수만으로 먼 구간의 함수값을 보장할 수 없다.

## 기타 참고 문헌

- [OpenStax, Defining the Derivative](https://openstax.org/books/calculus-volume-1/pages/3-1-defining-the-derivative): 차분몫의 극한과 접선·변화율.
- 선형 근사 표현, 연속성의 이유, 절댓값 반례를 위에 포함했다.

# 연관 문서

## 선수지식

- [연속함수](continuity.md)
- [선형사상](linear-maps.md)

## 더 알아보기

- [미적분학의 기본 정리](fundamental-calculus.md)
- [곡률](curvature.md)
- [경사하강법](gradient-descent.md)
- [정칙함수와 Cauchy 적분 정리](holomorphic-functions.md)
- [Lagrange 쌍대성과 KKT 조건](lagrange-duality.md)
- [다양체](manifolds.md)
- [최대가능도 추정](maximum-likelihood.md)
- [상미분방정식](ordinary-differential-equations.md)
- [멱급수와 Taylor 급수](power-series.md)
- [Newton 법](newton-method.md)
