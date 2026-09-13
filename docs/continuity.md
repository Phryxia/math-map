# 연속함수

연속함수는 입력을 충분히 조금 바꾸면 출력의 변화도 원하는 만큼 작아지는 함수다.

## 정의

거리 공간 X, Y의 거리를 각각 d_X, d_Y, 함수를 f, 기준점을 a로 정하자. ε는 출력에서 허용한 양의 오차이고 δ는 입력에서 허용할 양의 거리다.

f가 a에서 연속이라는 뜻은 다음과 같다.

$$
\forall\varepsilon>0\;\exists\delta>0\;\forall x\in X:\quad d_X(x,a)<\delta\Rightarrow d_Y(f(x),f(a))<\varepsilon
$$

X의 모든 점에서 연속이면 f를 연속함수라 한다. δ는 ε뿐 아니라 기준점 a에도 의존할 수 있다.

## 성질

거리 공간에서는 연속성이 수열의 극한 보존과 동치다. 양의 정수 n으로 인덱싱한 X의 수열 xₙ을 정하자. a로 수렴하는 모든 수열에 대해 다음이 성립해야 한다.

$$
x_n\to a\Rightarrow f(x_n)\to f(a)
$$

실수를 제곱하는 함수가 임의의 실수 a에서 연속임을 보자. 입력 차이를 1보다 작게 제한하면 다음처럼 출력 차이를 제어한다.

$$
|x^2-a^2|=|x-a||x+a|\le |x-a|(|x-a|+2|a|)<|x-a|(1+2|a|)
$$

따라서 주어진 ε에 대해 아래 δ를 택하면 된다.

$$
\delta=\min\left(1,\frac{\varepsilon}{1+2|a|}\right)
$$

연속함수의 합성은 연속이다. 바깥 함수가 요구하는 입력 오차를 안쪽 함수의 출력 오차로 넣어 조건을 이어 붙이면 증명된다.

연속이라고 미분 가능하지는 않다. 절댓값 함수는 0에서 연속이지만 왼쪽 기울기는 -1, 오른쪽 기울기는 1이어서 미분 가능하지 않다.

## 활용

근사 입력의 오차가 출력에 어떻게 전달되는지, 극한을 함수 안팎으로 옮길 수 있는지 다룬다. 미분방정식이나 최적화에서도 해와 목적함수의 거동을 분석하는 전제가 된다.

연속성과 균등연속성은 다르다. 균등연속성에서는 같은 ε에 대해 모든 기준점에 공통으로 쓸 δ가 있어야 한다. 실수 전체에서 제곱함수는 연속이지만 균등연속은 아니다.

## 기타 참고 문헌

- [Jiří Lebl, Continuous functions](https://www.jirka.org/ra/html/sec_cont.html): 연속성과 합성, 불연속 예시.
- [Jiří Lebl, Basic Analysis: Metric Spaces](https://www.jirka.org/ra/html/sec_metcont.html): 거리 공간에서의 연속성으로 확장하는 자료.
- 제곱함수의 점별 연속성 증명은 위에서 직접 구성했다.

# 연관 문서

## 선수지식

- [거리 공간](metric-spaces.md)

## 더 알아보기

- [위상 공간](topology.md)
- [축약사상 고정점 정리](banach-fixed-point.md)
- [미분](derivative.md)
- [Riemann 적분](riemann-integral.md)
- [균등수렴](uniform-convergence.md)

#analysis
